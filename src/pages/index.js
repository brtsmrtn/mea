import React from "react";
import {debounce as de} from "@/functions/debounce";
import {round as rnd} from "@/functions/round";
import useScreenSize from "@/hooks/useScreenSize";
import {Map} from "@/components/Map";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {Clouds} from "@/components/Clouds";
import {Intro} from "@/components/Intro";

const defaultHSnakeDim = {
  width: 0,
  height: 0,
  maxHeight: 0,
  scale: 0,
  transX: 0,
  transY: 0,
};

const thresholds = [
  {
    name: "intro",
    ratio: 0.04,
    position: "relative",
  },
  {
    name: "delim",
    ratio: 0.094,
  },
  {
    name: "lungs",
    ratio: 0.09,
    position: "sticky",
  },
  {
    name: "logo",
    ratio: 0.4,
    position: "relative",
  },
  {
    name: "clouds",
    ratio: 0.6,
    position: "relative",
  },
];

const debug = false;

export default function App() {
  const screenSize = useScreenSize();
  const {intro, toggleIntro} = useLocalStorage();
  const [scrollY, setScrollY] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [HSnakeDim, HSetSnakeDim] = React.useState(defaultHSnakeDim);
  const [paused, setPaused] = React.useState(1);
  const [toggleLayout, setToggleLayout] = React.useState(false);
  const parallax = React.useRef();
  const screen = React.useRef();
  const wrap = React.useRef();

  React.useEffect(() => {
    setWidth(screenSize.width);
    setHeight(screenSize.height);
    HSetSnakeDim({...defaultHSnakeDim, scale: 1});
  }, [screenSize.width, screenSize.height]);

  const HhandleSnake = React.useCallback(
    (node) => {
      const snakeWidth = node?.getBoundingClientRect()?.width;
      const snakeHeight = node?.getBoundingClientRect()?.height;
      if (!snakeWidth) return;

      const widthTresh = 0.9;
      const lungsWidth = 0.2193781128538216;

      const initScale_ = (widthTresh * width) / (snakeWidth * lungsWidth);
      const tongueTop =
        thresholds.find(({name}) => name === "delim").ratio *
        snakeHeight *
        initScale_;

      const scale =
        tongueTop > height ? initScale_ * (height / width) : initScale_;

      const transX = -2;
      const transY =
        tongueTop > height
          ? scale
          : ((height - tongueTop) / (snakeHeight * scale)) * widthTresh * 100;

      HSetSnakeDim({
        width: snakeWidth,
        height: snakeHeight,
        maxHeight: snakeHeight * scale * 1.75,
        scale,
        transX,
        transY,
      });
    },
    [width, height]
  );

  React.useEffect(() => {
    const handleWheelEvent = () => {
      if (!parallax?.current) return;
      if (!wrap?.current) return;
      if (!HSnakeDim.maxHeight) return;

      const transYDef = (HSnakeDim.maxHeight * HSnakeDim.transY) / 100;

      const scrollY =
        -parallax.current.getBoundingClientRect().y / HSnakeDim.maxHeight -
        transYDef / HSnakeDim.maxHeight;
      setScrollY(scrollY);

      const validTresholds = thresholds.filter(({name}) => name !== "delim");

      let transY = 0;
      let position = "sticky";
      for (const t of validTresholds) {
        if (scrollY <= t.ratio) break;

        position = t.position;
        const ratio = HSnakeDim.maxHeight * t.ratio;
        if (t.name === "intro") transY = ratio + transYDef;
        if (t.name === "lungs") transY = transY - ratio - transYDef;
        if (t.name === "logo") transY = ratio + transYDef + transY;
      }
      screen.current.style.position = position;
      screen.current.style.transform = `translate3d(0px, ${transY}px, 0px)`;
    };

    const {current} = wrap;
    current?.addEventListener("scroll", de(handleWheelEvent));
    return () => {
      current?.removeEventListener("scroll", de(handleWheelEvent));
    };
  }, [HSnakeDim.maxHeight, wrap?.current, parallax?.current]);

  React.useEffect(() => {
    if (scrollY > 0.8) {
      setToggleLayout(true);
      setPaused(scrollY > 1.4 ? 0 : rnd((1.4 - rnd(scrollY, 1)) * 10, 0));
      toggleIntro(false);
    }
  }, [scrollY]);

  React.useEffect(() => {
    if (toggleLayout === false) return;

    let scrollHelp;
    if (paused !== 0) {
      scrollHelp = setInterval(() => {
        setScrollY((prev) => prev + 0.02);
      }, 12 * paused);
    }

    return () => clearInterval(scrollHelp);
  }, [toggleLayout, paused]);

  return (
    <>
      {debug && (
        <div className={"helper"}>
          <span>{`scrollY: ${rnd(scrollY)} (~ ${rnd(
            scrollY * HSnakeDim.maxHeight,
            4
          )}px)`}</span>
          <br />
          <span>{`Viewport: ${width} x ${height}`}</span>
          <span>
            {`Snake: ${rnd(HSnakeDim.width)} x
  ${rnd(HSnakeDim.height)}`}
          </span>
        </div>
      )}
      {intro && scrollY <= 0.8 ? (
        <Intro
          scrollY={scrollY}
          width={width}
          height={height}
          wrap={wrap}
          parallax={parallax}
          screen={screen}
          HSnakeDim={HSnakeDim}
          HhandleSnake={HhandleSnake}
        />
      ) : (
        <Map width={width} height={height} toggleIntro={toggleIntro} />
      )}
      {scrollY > 0.35 && scrollY < 1.4 && (
        <Clouds width={width} height={height} scrollY={scrollY} />
      )}
    </>
  );
}
