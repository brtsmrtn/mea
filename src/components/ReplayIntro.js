import {useBrowserDetect} from "@/hooks/useBrowserDetect";

export const ReplayIntro = ({toggleIntro}) => {
  const {isSafari} = useBrowserDetect();
  const padding = isSafari ? "1vmax 2vmax 0.75vmax" : "1vmax 2vmax 1.75vmax";

  return (
    <div className="button" onClick={() => toggleIntro(true)}>
      <button type="submit" style={{padding}}>
        Replay intro
      </button>
    </div>
  );
};
