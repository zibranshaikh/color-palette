import React from "react";

const Input = ({
  type,
  disabled,
  placeholder,
  maxLength,
  value,
  onChange,
  className,
}: {
  type: string;
  disabled?: boolean;
  placeholder: string;
  maxLength?: number;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}) => {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

export default Input;
