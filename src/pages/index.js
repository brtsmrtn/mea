import React from "react";
import {useSpring, animated} from "@react-spring/web";
import {debounce} from "@/hooks/debounce";

export default function Home() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", debounce(handleScroll));
    return () => window.removeEventListener("scroll", debounce(handleScroll));
  }, [debounce]);

  const [{springscrollY}, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxLevel = 0.75;

  springsetScrollY({springscrollY: scrollY});

  springscrollY.to((o) => console.log(o));
  const interpHeader = springscrollY.to(
    (o) => `translateY(${o / parallaxLevel}px)`
  );
  const parallax = React.useRef();

  const [springs, api] = useSpring(() => ({
    loop: {reverse: true},
    immediate: true,
    delay: 0,
    from: {
      width: "20vw",
      left: "calc(50vw - 20vw / 2)",
    },
    to: [
      {
        width: "15vw",
        left: "calc(50vw - 15vw / 2)",
      },
      {
        width: "25vw",
        left: "calc(50vw - 25vw / 2)",
      },
    ],
  }));

  {
    /* 
          React-spring:::
          https://www.react-spring.dev/docs/concepts/animated-elements
          https://codesandbox.io/s/b07dmz?file=/src/App.tsx
          Parallax:::
          https://codesandbox.io/s/h1rrv?file=/src/App.tsx
          https://www.youtube.com/watch?v=UgIwjLg4ONk
          https://github.com/fireship-io/skydiving-cat-parallax/blob/main/src/App.jsx
      */
  }

  return (
    <div ref={parallax}>
      <animated.div
        style={{
          boxShadow:
            "rgb(250, 250, 250) 0px 0px 100px -30px inset, rgb(255, 183, 75) 0px 0px max(60px, 6vw) max(60px, 6vw) inset, rgb(255, 183, 75) 0px 0px 120px 80px",
          aspectRatio: "1 / 1",
          position: "absolute",
          borderRadius: "50%",
          backgroundColor: "#fbf1de",
          filter: "blur(2px)",
          transform: interpHeader,
          ...springs,
        }}
      />
      {Array(20)
        .fill(0)
        .map((_nothing, index) => (
          <h1 key={index}>&nbsp;</h1>
        ))}
    </div>
  );
}
