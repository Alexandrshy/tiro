import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  isVisibleLabel?: boolean;
  min?: number;
  max?: number;
  theme?: "dark" | "light";
  value: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Range slider field
 * @param {string} props.id - Control id
 * @param {boolean} props.isVisibleLabel - Is a visible label
 * @param {number} props.min - Minimum value
 * @param {number} props.max - Maximum value
 * @param {string} props.theme - Theme for styling color schemes
 * @param {string} props.value - Value
 * @param {string} props.className - Additional className
 * @param {onChange} props.onChange - Method for handling input changes
 */
export const Slider: React.FC<PropsType> = ({
  id,
  isVisibleLabel = true,
  min = 0,
  max = 100,
  theme = "dark",
  value,
  className,
  onChange,
  children,
}) => (
  <div className={style.box}>
    <input
      id={id}
      type="range"
      className={classNames(
        style.input,
        { [style.inputLight]: theme === "light" },
        className
      )}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
    <label
      htmlFor={id}
      className={classNames({
        "visually-hidden": !isVisibleLabel,
      })}
    >
      {children}
    </label>
  </div>
);
