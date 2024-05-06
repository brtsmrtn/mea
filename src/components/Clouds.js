import {round} from "@/functions/round";
import {Cloud} from "./Cloud";
import {useBrowserDetect} from "@/hooks/useBrowserDetect";

export const Clouds = ({width, height, scrollY}) => {
  const {isSafari} = useBrowserDetect();
  if (!width) return;
  if (!height) return;
  if (!scrollY) return;
  return (
    <div className="clouds">
      <Cloud
        x={
          isSafari ? -200 : Number(round(-2.5 * width + scrollY * width * 6, 2))
        }
        y={
          isSafari
            ? 1200
            : Number(round(-height / 5 + (5 * height * scrollY) / 4, 2))
        }
        vw={5}
        vh={5}
        vmin={2}
        fromRight
      />
      <Cloud
        x={Number(round(-3.5 * width + scrollY * width * 7, 2))}
        y={Number(round(height * scrollY, 2))}
        vw={5}
        vh={25}
        vmin={6}
      />
      <Cloud
        x={Number(round(-2.5 * width + scrollY * width * 6, 2))}
        y={Number(round(height * 2 * scrollY, 2))}
        vw={isSafari ? 50 : 120}
        vh={isSafari ? 35 : 70}
        vmin={isSafari ? 12 : 3}
        fromRight={isSafari ? false : true}
      />
      <Cloud
        x={Number(round(-4.5 * width + scrollY * width * 7, 2))}
        y={Number(round(height * scrollY, 2))}
        vw={isSafari ? 20 : 50}
        vh={isSafari ? 40 : 50}
        vmin={isSafari ? 12 : 30}
      />
      <Cloud
        x={Number(round(-6 * width + scrollY * width * 8, 2))}
        y={Number(round(height * scrollY, 2))}
        vw={isSafari ? 50 : 400}
        vh={isSafari ? 20 : 50}
        vmin={isSafari ? 12 : 80}
        fromRight={isSafari ? false : true}
      />
    </div>
  );
};
