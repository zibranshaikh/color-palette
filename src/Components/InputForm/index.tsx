import React from "react";
import Input from "./Input";
import "./style.css";

const InputForm = ({
  backgroundColor,
  accentColor,
  handleBackgroundColorChange,
  handleAccentColorChange,
  handleGenerateShadeClick,
  handleReset,
}: {
  backgroundColor: string;
  accentColor: string;
  handleBackgroundColorChange(color: React.ChangeEvent<HTMLInputElement>): void;
  handleAccentColorChange(color: React.ChangeEvent<HTMLInputElement>): void;
  handleGenerateShadeClick(): void;
  handleReset(): void;
}) => {
  return (
    <div className="input_container">
      <div className="input_item">
        <div className="parent_container">
          <h3 className="input_heading_text">Background</h3>
          <div
            className="color_box"
            style={{ backgroundColor: "#" + backgroundColor }}
          />
        </div>
        <div className="inputGroup">
          <Input
            type={"text"}
            disabled={true}
            placeholder={""}
            value={"#"}
            className={"fixed_hash"}
          />
          <Input
            type={"text"}
            placeholder={"c3c3c3"}
            maxLength={8}
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            className={"input_text"}
          />
        </div>
      </div>
      <div className="input_item">
        <div className="parent_container">
          <h3 className="input_heading_text">Accent</h3>
          <div
            className="color_box"
            style={{ background: "#" + accentColor }}
          />
        </div>
        <div className="inputGroup">
          <Input
            type={"text"}
            disabled={true}
            placeholder={""}
            value={"#"}
            className={"fixed_hash"}
          />
          <Input
            type={"text"}
            placeholder={"c3c3c3"}
            maxLength={8}
            value={accentColor}
            onChange={handleAccentColorChange}
            className={"input_text"}
          />
        </div>
      </div>
      <div className="generateShadeBtn">
        <button
          onClick={handleGenerateShadeClick}
          disabled={!backgroundColor && !accentColor}
        >
          Generate Shades
        </button>
        <button
          onClick={handleReset}
          disabled={!backgroundColor && !accentColor}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default InputForm;
