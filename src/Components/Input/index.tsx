import React from "react";
import styles from "./style.module.css";

interface Props {
  type: string;
  name?: string;
  disabled?: boolean;
  placeholder: string;
  maxLength?: number;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type,
  name,
  disabled,
  placeholder,
  maxLength,
  value,
  onChange,
}: Props) => {
  return (
    <input
      type={type}
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      className={styles.inputText}
    />
  );
};

export default Input;
