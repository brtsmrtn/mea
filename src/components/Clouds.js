import {Cloud} from "./Cloud";

export const Clouds = ({width, height, scrollY}) => {
  if (!width) return;
  if (!height) return;

  const portraitMode = width < height;
  return (
    <div className="clouds">
      <Cloud
        x={(portraitMode ? 2 : 3) * width - scrollY * width * 6}
        y={(portraitMode ? 0.9 : 0.3) * height - 3.5 * height * scrollY}
        width={width < height ? "250vw" : "250vw"}
        image="cloud-four.png"
      />
      <Cloud
        x={scrollY * width * 6 - 3 * width}
        y={18 * height - 35 * height * scrollY}
        width={width < height ? "100vw" : "50vw"}
        image="cloud-five.png"
      />
      <Cloud
        x={scrollY * width * 4 - 3 * width}
        y={-30 * height * scrollY - height * -15.2}
        width={width < height ? "300vw" : "150vw"}
        image="cloud-three.png"
      />
      <Cloud
        x={6 * width - scrollY * width * 12}
        y={(portraitMode ? 4 : -1.6) * height * scrollY - height * 3.8}
        width={width < height ? "800vw" : "1000vw"}
        image="cloud-three.png"
      />
    </div>
  );
};
