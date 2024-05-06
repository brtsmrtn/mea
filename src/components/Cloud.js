import {cloud} from "@/functions/cloud";
import {useBrowserDetect} from "@/hooks/useBrowserDetect";
import useScreenSize from "@/hooks/useScreenSize";
import React from "react";

export const Cloud = ({
  x = 0,
  y = 0,
  vw = 5,
  vh = 5,
  vmin = 2,
  fromRight = false,
}) => {
  const screenSize = useScreenSize();
  const {isSafari} = useBrowserDetect();
  const boxShadow = React.useMemo(() => {
    const {width, height} = screenSize;
    const n = width < 600 && width < height ? 50 : 5;

    return cloud(n, vw, vh, vmin);
  }, [screenSize.width, screenSize.height, vw, vh, vmin]);

  const styles = React.useMemo(() => {
    return x === 0 || y === 0
      ? {
          boxShadow,
          willChange: "box-shadow",
        }
      : isSafari
      ? {
          boxShadow,
          transform: `translate(${
            !fromRight || (!fromRight && x < 0) ? "" : "-"
          }${x}px, ${y < 0 ? y : -y}px)`,
          willChange: "transform",
        }
      : {
          boxShadow,
          bottom: y,
          left: fromRight ? -x : x,
          willChange: "left, bottom, box-shadow",
        };
  }, [isSafari, x, y, boxShadow, fromRight]);
  return <div style={styles} className="cloud" />;
};
