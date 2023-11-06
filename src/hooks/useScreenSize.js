// useScreenSize.js
import React from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = React.useState(() => {
    // use a lazy initializer, which helps you have a cleaner
    // view into how this might be initialized in either CSR or SSR contexts
    return {
      width: typeof window !== "undefined" ? window.innerWidth : 0,
      height: typeof window !== "undefined" ? window.innerHeight : 0,
    }; // start with state at zero if we are on the server
    // naturally you can change `0` to whatever you prefer, or suits your needs best
  });

  React.useEffect(() => {
    const handleResize = (e) => {
      e.preventDefault();
      setScreenSize({
        width: window?.innerWidth,
        height: window?.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize, {passive: true});

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize, {passive: true});
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
