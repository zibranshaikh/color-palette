import CopyIcon from "../../Assets/copy-icon.svg";
import copyFunction from "../../Utils/copyFunction";
import "./style.css";

const ColorPalette = ({
  backgroundShades,
  accentShades,
}: {
  backgroundShades: Array<string>;
  accentShades: Array<string>;
}) => {
  const _renderColorShades = (arrayOfShades: Array<string>) =>
    arrayOfShades.map((value: string, index: number) => {
      return (
        <div
          key={index}
          className="child"
          style={{ backgroundColor: "#" + value }}
        >
          <img src={CopyIcon} onClick={() => copyFunction(value)} />
        </div>
      );
    });

  return (
    <div className="outer_container">
      <div className="container">
        <div className="output_container">
          <h4 className="outer_heading_text">Background Shades</h4>
          <div className="parent_wrapper">
            <div className="parent">{_renderColorShades(backgroundShades)}</div>
          </div>
        </div>
        <div className="output_container">
          <h4 className="outer_heading_text">Accent Shades</h4>
          <div className="parent_wrapper">
            <div className="parent">{_renderColorShades(accentShades)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
