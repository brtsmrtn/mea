import React from "react";
import {Guadalquivir} from "@/data/svgs";
import {useSpring, animated} from "@react-spring/web";
import {Cue} from "./Cue";

export const Intro = ({
  scrollY,
  width,
  height,
  wrap,
  parallax,
  screen,
  HSnakeDim,
  HhandleSnake,
}) => {
  const [lungsIn, setLungsIn] = React.useState(1);
  const [lungsOut, setLungsOut] = React.useState(0);
  const [HSnakeHeadDim, HSetSnakeHeadDim] = React.useState({
    width: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  React.useEffect(() => {
    setLungsIn(
      scrollY >= 0.09 && scrollY <= 0.2
        ? 0.9 + scrollY
        : scrollY > 0.2 && scrollY <= 0.4
        ? 0.2 - scrollY
        : 0
    );
    setLungsOut(
      scrollY >= 0.09 && scrollY <= 0.2
        ? 0
        : scrollY > 0.2 && scrollY <= 0.4
        ? 0.6 + scrollY
        : 1
    );
  }, [scrollY]);

  const HhandleSnakeHead = React.useCallback(
    (node) => {
      if (!HSnakeDim?.width) return;
      HSetSnakeHeadDim({
        width: node?.getBoundingClientRect()?.width, // right - left
        height: node?.getBoundingClientRect()?.height, // bottom - top
        left: node?.getBoundingClientRect()?.left, // = x
        top: node?.getBoundingClientRect()?.top, // = y
      });
    },
    [HSnakeDim?.width, width]
  );

  const [springs] = useSpring(() => {
    if (!width || !height) return;
    if (!HSnakeHeadDim.width || !HSnakeHeadDim.height) return;
    const xStart = HSnakeHeadDim.left / width;
    const xBody = HSnakeHeadDim.width / width;
    const yStart = HSnakeHeadDim.top / height;
    const yBody = HSnakeHeadDim.height / height;
    let x = xStart + xBody * 0.7125;
    let y = yStart + yBody * 0.27;
    switch (true) {
      case scrollY > 0.4: {
        x = -1;
        y = -1;
        break;
      }
      case scrollY > 0.08: {
        x = xStart + xBody * 0.21;
        y = yStart + yBody * 3.5 * scrollY;
        break;
      }
      case scrollY > 0.06: {
        x = xStart + xBody * 0.23;
        y = yStart + yBody * 0.22 + scrollY;
        break;
      }
      case scrollY > 0.05: {
        x = xStart + xBody * 0.23;
        y = yStart + yBody * 0.16 + scrollY;
        break;
      }
      case scrollY > 0.04: {
        x = xStart + xBody * 0.45 - scrollY;
        y = yStart + yBody * 0.11 - scrollY;
        break;
      }
      case scrollY > 0.03: {
        x = xStart + xBody * 0.725;
        y = yStart + yBody * 0.12 - scrollY;
        break;
      }
      case scrollY > 0.02: {
        x = xStart + xBody * 0.725;
        y = yStart + yBody * 0.22 - scrollY;
        break;
      }
      case scrollY > -0.02: {
        y =
          scrollY > 0
            ? yStart + yBody * 0.26 - 2 * scrollY
            : yStart + yBody * 0.26 + Math.abs(scrollY);
        break;
      }
      case scrollY < -0.04: {
        y = yStart + yBody * 0.26 + 0.02;
      }
    }
    return {
      loop: {reverse: true},
      reset: true,
      delay: 0,
      from: {
        width: "2.5vw",
        left: `${x * width}px`,
        top: `${y * height}px`,
      },
      to: {
        width: "1.875vw",
        left: `${x * width + 8}px`,
        top: `${y * height + 8}px`,
      },
    };
  }, [scrollY, width, height, HSnakeHeadDim.width]);

  return (
    <>
      <div ref={wrap} className="wrap">
        <div
          ref={parallax}
          className="parallax"
          style={{height: HSnakeDim.maxHeight}}
        />
        <div ref={screen} className="screen">
          <Guadalquivir
            HSnake={HhandleSnake}
            HSnakeHead={HhandleSnakeHead}
            lungsIn={lungsIn}
            lungsOut={lungsOut}
            styles={{
              opacity: HSnakeDim.scale === 0 ? 0 : 1,
              transform: `scale(${HSnakeDim.scale}) translate(${HSnakeDim.transX}%, ${HSnakeDim.transY}%)`,
              transformOrigin: "center top",
              willChange: "transform",
            }}
          />
          <animated.div className="ball" style={{...springs}} />
        </div>
      </div>
      <Cue />
    </>
  );
};
