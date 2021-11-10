import React, { useState } from "react";
import Header from "../../Components/Header";
import ColorInputForm from "../../Components/ColorInputForm";
import ColorPalette from "../../Components/ColorPalette";
import { getColorShades, checkHexCode } from "../../Utils";
import styles from "./style.module.css";

const Home = () => {
  const [backgroundShades, setBackgroundShades] = useState<Array<string>>([]);
  const [accentShades, setAccentShades] = useState<Array<string>>([]);

  const handleSubmit = (backgroundColor: string, accentColor: string) => {
    const bgShades: Array<string> = getColorShades(backgroundColor);
    setBackgroundShades(bgShades);
    const acShades: Array<string> = getColorShades(accentColor);
    setAccentShades(acShades);
  };

  const handleReset = () => {
    setBackgroundShades([]);
    setAccentShades([]);
  };

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div>
          <ColorInputForm
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />
        </div>
      </div>
      <div>
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
