import "@/styles/globals.scss";
import React from "react";
import {AppContext} from "@/context/AppContext";
import useScreenSize from "@/hooks/useScreenSize";
import localFont from "next/font/local";

const AmareAlta = localFont({
  src: [
    {
      path: "./Amare-Alta.woff",
      weight: "800",
      style: "normal",
    },
  ],
});
const AmareMedium = localFont({
  src: [
    {
      path: "./Amare-Medium.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
const AmareLinnea = localFont({
  src: [
    {
      path: "./Amare-Linnea.woff",
      weight: "100",
      style: "normal",
    },
  ],
});
const RobotoMono = localFont({
  src: [
    {
      path: "./RobotoMono-Regular.woff",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function MyApp({Component, pageProps}) {
  const screenSize = useScreenSize();

  const appContext = {
    screenSize,
  };
  return (
    <AppContext.Provider value={appContext}>
      <style jsx global>{`
        :root {
          /* ... */
          --amare-alta: ${AmareAlta.style.fontFamily};
          --amare-medium: ${AmareMedium.style.fontFamily};
          --amare-linnea: ${AmareLinnea.style.fontFamily};
          --roboto-mono: ${RobotoMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
