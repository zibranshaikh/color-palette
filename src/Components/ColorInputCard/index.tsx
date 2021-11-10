import React from "react";
import Input from "../Input";
import styles from "./style.module.css";

interface Props {
  title: string;
  placeholder: string;
  value: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const ColorInputCard = ({
  title,
  placeholder,
  name,
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles.inputItem}>
      <div className={styles.parentContainer}>
        <h3 className={styles.inputHeadingText}>{title}</h3>
        <div
          className={styles.colorBox}
          style={{ background: `#${value || "c4c4c4"}` }}
        />
      </div>
      <div className={styles.inputGroup}>
        <p className={styles.fixedHash}>#</p>
        <Input
          type={"text"}
          name={name}
          placeholder={placeholder}
          maxLength={6}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ColorInputCard;
