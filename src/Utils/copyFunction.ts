import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";

const copyFunction = (text: string) => {
  navigator.clipboard.writeText(text);
};

export default copyFunction;
