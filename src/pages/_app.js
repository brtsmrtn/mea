import "@/styles/app.scss";
import React from "react";
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

const MyApp = ({Component, pageProps}) => (
  <>
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
  </>
);
export default MyApp;
