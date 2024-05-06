export const CloudBase = () => (
  <svg
    width="0"
    height="0"
    style={{position: "absolute"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="filter" colorInterpolationFilters="sRGB">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.01"
        numOctaves="10"
        stitchTiles="stitch"
      />
      <feDisplacementMap in="SourceGraphic" scale="240" />
    </filter>
  </svg>
);
