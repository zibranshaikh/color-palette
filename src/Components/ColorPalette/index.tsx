import ColorPaletteRow from "../ColorPaletteRow";
import styles from "./style.module.css";

interface Props {
  backgroundShades: Array<string>;
  accentShades: Array<string>;
}

const ColorPalette = ({ backgroundShades, accentShades }: Props) => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <ColorPaletteRow colors={backgroundShades} />
        <ColorPaletteRow colors={accentShades} />
      </div>
    </div>
  );
};

export default ColorPalette;
