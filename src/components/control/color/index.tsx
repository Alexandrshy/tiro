import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  className?: string;
  value?: string;
  onChange: (value: string) => void;
};

/**
 * Color input field
 * @param {string} props.id - Control id
 * @param {string} props.className - Additional className
 * @param {string} props.value - Value
 * @param {onChange} props.onChange - Method for handling input changes
 */
export const ColorPicker: React.FC<PropsType> = ({
  id,
  className,
  value,
  onChange,
}) => {
  /**
   * Handling input value changes
   * @param {React.ChangeEvent<HTMLInputElement>} event - Processed event
   */
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    onChange(event.target.value);

  return (
    <div className={style.wrapper}>
      <input
        id={id}
        type="color"
        className={classNames(style.input, className)}
        onChange={onChangeHandler}
        value={value}
      />
      <label
        htmlFor={id}
        className={style.label}
        style={{
          backgroundColor: value,
        }}
      >
        Color picker
      </label>
    </div>
  );
};
