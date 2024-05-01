import {cloud} from "@/functions/cloud";
import React from "react";

export const Cloud = ({
  n = 100,
  x = 0,
  y = 0,
  vw = 5,
  vh = 5,
  vmin1 = 20,
  vmin2 = 2,
  fromRight = false,
}) => {
  const boxShadow = React.useMemo(
    () => cloud(n, vw, vh, vmin1, vmin2),
    [n, vw, vh, vmin1, vmin2]
  );
  return (
    <>
      <svg width="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
      </svg>
      <div
        style={{
          boxShadow,
          bottom: y,
          left: fromRight ? "unset" : x,
          right: fromRight ? x : "unset",
          filter: "url(#filter)",
        }}
        className="cloud"
      />
    </>
  );
};
