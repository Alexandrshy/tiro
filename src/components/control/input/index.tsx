import classNames from "classnames";
import React, { useCallback } from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  isVisibleLabel?: boolean;
  className?: string;
  value?: string;
  type?: "text" | "number";
  min?: string;
  max?: string;
  leftPointer?: string;
  rightPointer?: string;
  onChange: (value: string) => void;
  onBlur?: (event: any) => void;
};

/**
 * Text input field
 * @param {string} props.id - Control id
 * @param {boolean} props.isVisibleLabel - Is a visible label
 * @param {string} props.className - Additional className
 * @param {string} props.value - Value
 * @param {text | number} props.type - Type
 * @param {string} min - Minimum value for a field of type number
 * @param {string} max - Maximum value for a field of type number
 * @param {string} props.leftPointer - Left side margin hint
 * @param {string} props.rightPointer - Right side margin hint
 * @param {onChange} props.onChange - Method for handling input changes
 * @param {onBlur} props.onBlur - Method for handling input blur
 */
export const Input: React.FC<PropsType> = ({
  id,
  isVisibleLabel = true,
  className,
  value,
  type = "text",
  min = "0",
  max = "10000",
  leftPointer,
  rightPointer,
  onChange,
  onBlur = () => {},
  children,
}) => {
  /**
   * Handling input value changes
   * @param {React.ChangeEvent<HTMLInputElement>} event - Processed event
   */
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.value),
    [onChange]
  );

  return (
    <div className={style.wrapper}>
      <label
        htmlFor={id}
        className={classNames(style.label, {
          "visually-hidden": !isVisibleLabel,
        })}
      >
        {children}
      </label>
      {leftPointer && <span className={style.leftPointer}>{leftPointer}</span>}
      <input
        id={id}
        type={type}
        className={classNames(
          style.input,
          {
            [style.leftOffset]: leftPointer,
            [style.rightOffset]: rightPointer,
          },
          className
        )}
        onChange={onChangeHandler}
        onBlur={onBlur}
        value={value}
        min={min}
        max={max}
      />
      {rightPointer && (
        <span className={style.rightPointer}>{rightPointer}</span>
      )}
    </div>
  );
};
