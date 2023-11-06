import React from "react";

/** @type {AppContext} */
const defaultContext = {
  screenSize: undefined,
};

export const AppContext = React.createContext(defaultContext);
