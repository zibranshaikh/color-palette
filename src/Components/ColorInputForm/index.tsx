import React, { useState, useEffect } from "react";
import ColorInputCard from "../ColorInputCard";
import { checkHexCode } from "../../Utils";
import styles from "./style.module.css";

interface Props {
  handleSubmit: (backgroundColor: string, accentColor: string) => void;
  handleReset: () => void;
}

interface Colors {
  background: string;
  accent: string;
}

const initialState = {
  background: "",
  accent: "",
};

const ColorInputForm = ({ handleReset, handleSubmit }: Props) => {
  const [colors, setColors] = useState<Colors>(initialState);
  const [hasErrors, setHasErrors] = useState(true);

  useEffect(() => {
    setHasErrors(
      !(checkHexCode(colors.background) && checkHexCode(colors.accent))
    );
  }, [colors]);

  const generateShades = () => {
    if (!hasErrors) {
      handleSubmit(colors.background, colors.accent);
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setColors({ ...colors, [name]: value });
  };

  const handleResetButton = () => {
    setColors(initialState);
    setHasErrors(true);
    handleReset();
  };

  return (
    <div className={styles.inputContainer}>
      <ColorInputCard
        name="background"
        title="Background"
        value={colors.background}
        placeholder="c3c3c3"
        onChange={handleColorChange}
      />
      <ColorInputCard
        name="accent"
        title="Accent"
        value={colors.accent}
        placeholder="c3c3c3"
        onChange={handleColorChange}
      />
      <div className={styles.buttonGroup}>
        <button onClick={generateShades} disabled={hasErrors}>
          Generate Shades
        </button>
        <button onClick={handleResetButton}>Reset</button>
      </div>
    </div>
  );
};

export default ColorInputForm;
