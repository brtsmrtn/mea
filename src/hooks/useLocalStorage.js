import React from "react";

export function useLocalStorage() {
  const [isWindowAvailable] = React.useState(typeof window !== "undefined");
  const [intro, setIntro] = React.useState(true);

  React.useEffect(() => {
    if (isWindowAvailable) {
      const item = window.localStorage.getItem("mea_skipIntro");
      setIntro(item ? JSON.parse(item) : true);
    }
  }, [isWindowAvailable, intro]);

  const toggleIntro = (value) => {
    window.localStorage.setItem("mea_skipIntro", JSON.stringify(value));
    if (value === true) window.location.reload();
  };

  return {intro, toggleIntro};
}
