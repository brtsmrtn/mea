export const useBrowserDetect = () => {
  /**
   * based on https://www.geeksforgeeks.org/how-to-detect-the-user-browser-safari-chrome-ie-firefox-and-opera-using-javascript/
   */
  if (typeof navigator === "undefined") return {isSafari: false};

  const userAgentString = navigator.userAgent;
  const isSafari =
    /Version\/[\d.]+.*Safari/.test(userAgentString) &&
    !/Chrome|CriOS|Chromium/.test(userAgentString);

  return {isSafari};
};
