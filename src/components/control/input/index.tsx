import classNames from "classnames";
import React, { useCallback } from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  isVisibleLabel?: boolean;
  className?: string;
  value?: string;
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
 * @param {onChange} props.onChange - Method for handling input changes
 * @param {onBlur} props.onBlur - Method for handling input blur
 */
export const Input: React.FC<PropsType> = ({
  id,
  isVisibleLabel = true,
  className,
  value,
  rightPointer,
  onChange,
  onBlur = () => {},
  children,
}) => {
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
      <input
        id={id}
        type="text"
        className={classNames(
          style.input,
          { [style.rightOffset]: rightPointer },
          className
        )}
        onChange={onChangeHandler}
        onBlur={onBlur}
        value={value}
      />
      {rightPointer && (
        <span className={style.rightPointer}>{rightPointer}</span>
      )}
    </div>
  );
};
