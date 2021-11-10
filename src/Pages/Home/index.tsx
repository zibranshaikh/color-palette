import React, { useState } from "react";
import Header from "../../Components/Header";
import InputForm from "../../Components/InputForm";
import ColorPalette from "../../Components/ColorPalette";
import colorShadeGenerator from "../../Utils/colorShadeGenerator";
import "./style.css";

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [accentColor, setAccentColor] = useState<string>("");
  const [backgroundShades, setBackgroundShades] = useState<Array<string>>([]);
  const [accentShades, setAccentShades] = useState<Array<string>>([]);
  const regexPattern = /^[0-9A-F]{6}$/i;

  const handleBackgroundColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBackgroundColor(event.target.value);
  };

  const handleAccentColorChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccentColor(event.target.value);
  };

  const checkHexCode = (hex: string) => {
    if (regexPattern.test(hex)) return true;
  };

  const handleGenerateShadeClick = () => {
    if (backgroundColor && accentColor) {
      if (checkHexCode(backgroundColor) && checkHexCode(accentColor)) {
        const bgShades: Array<string> = colorShadeGenerator(backgroundColor);
        setBackgroundShades(bgShades);
        const acShades: Array<string> = colorShadeGenerator(accentColor);
        setAccentShades(acShades);
      } else {
        alert("HEX code is not valid.");
      }
    } else {
      setBackgroundShades([]);
      setAccentShades([]);
    }
  };

  const handleReset = () => {
    setBackgroundColor("");
    setAccentColor("");
    setBackgroundShades([]);
    setAccentShades([]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="input_section">
          <InputForm
            backgroundColor={backgroundColor}
            handleBackgroundColorChange={handleBackgroundColorChange}
            accentColor={accentColor}
            handleAccentColorChange={handleAccentColorChange}
            handleGenerateShadeClick={handleGenerateShadeClick}
            handleReset={handleReset}
          />
        </div>
      </div>
      <div className="output_section">
        {backgroundShades.length > 0 && accentShades.length > 0 && (
          <ColorPalette
            backgroundShades={backgroundShades}
            accentShades={accentShades}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
