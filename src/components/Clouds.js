import {Cloud} from "./Cloud";

export const Clouds = ({width, height, scrollY}) => (
  <div className="clouds">
    <Cloud
      n={20}
      x={-2.5 * width + scrollY * width * 6}
      y={-height / 5 + (5 * height * scrollY) / 4}
      vw={5}
      vh={5}
      vmin1={20}
      vmin2={2}
      fromRight
    />
    <Cloud
      n={20}
      x={-3.5 * width + scrollY * width * 7}
      y={height * scrollY}
      vw={5}
      vh={25}
      vmin1={30}
      vmin2={6}
    />
    <Cloud
      n={40}
      x={-2.5 * width + scrollY * width * 6}
      y={height * 2 * scrollY}
      vw={120}
      vh={70}
      vmin1={50}
      vmin2={3}
      fromRight
    />
    <Cloud
      n={30}
      x={-4.5 * width + scrollY * width * 7}
      y={height * scrollY}
      vw={50}
      vh={50}
      vmin1={50}
      vmin2={30}
    />
    <Cloud
      n={20}
      x={-6 * width + scrollY * width * 10}
      y={height * scrollY}
      vw={400}
      vh={50}
      vmin1={20}
      vmin2={80}
      fromRight
    />
  </div>
);
