import "@/styles/globals.scss";
import React from "react";
import {AppContext} from "@/context/AppContext";
import useScreenSize from "@/hooks/useScreenSize";

export default function MyApp({Component, pageProps}) {
  const screenSize = useScreenSize();

  const appContext = {
    screenSize,
  };
  return (
    <AppContext.Provider value={appContext}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
