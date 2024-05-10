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
const AmareLinnea = localFont({
  src: [
    {
      path: "./Amare-Linnea.woff",
      weight: "100",
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
        --amare-linnea: ${AmareLinnea.style.fontFamily};
      }
    `}</style>
    <Component {...pageProps} />
  </>
);
export default MyApp;
