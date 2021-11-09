import hexRgb from "hex-rgb";
import rgbHex from "rgb-hex";

const colorShadeGenerator = (color: string) => {
  const colorInRGB = hexRgb(color, { format: "array" });
  const max = Math.max(
    Math.max(colorInRGB[0], Math.max(colorInRGB[1], colorInRGB[2])),
    1
  );
  const step = 255 / (max * 10);
  const colorPallete = [];
  for (let i = 1; i <= 10; i++) {
    const value = [
      Math.trunc(colorInRGB[0] * step * i),
      Math.trunc(colorInRGB[1] * step * i),
      Math.trunc(colorInRGB[2] * step * i),
    ];
    colorPallete.push(value);
  }
};

export default colorShadeGenerator;
