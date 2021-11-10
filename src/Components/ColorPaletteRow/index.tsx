import CopyIcon from "../../Assets/copy-icon.svg";
import { copyFunction } from "../../Utils";
import styles from "./style.module.css";

interface Props {
  colors: Array<string>;
}

const ColorPaletteRow = ({ colors }: Props) => (
  <div className={styles.outputContainer}>
    <h4 className={styles.outerHeadingText}>Background Shades</h4>
    <div className={styles.parentWrapper}>
      <div className={styles.parent}>
        {colors.map((color) => (
          <div
            key={color}
            className={styles.child}
            style={{ backgroundColor: `#${color}` }}
          >
            <img src={CopyIcon} onClick={() => copyFunction(`#{color}`)} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ColorPaletteRow;
