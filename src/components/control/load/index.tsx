import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  isVisibleLabel?: boolean;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  isBorder?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * File upload control
 * @param {string} props.id - Control id
 * @param {boolean} props.isVisibleLabel - Is a visible label
 * @param {string} props.className - Additional className
 * @param {onChange} props.onChange - Method for handling input changes
 * @param {boolean} props.isBorder - Border for refreshing the loading area
 */
export const Upload: React.FC<PropsType> = ({
  id,
  isVisibleLabel = true,
  className,
  onChange,
  children,
  inputRef,
  isBorder = true,
}) => (
  <div className={style.wrapper}>
    <input
      id={id}
      type="file"
      accept="image/png, image/jpeg"
      className={classNames(style.input, className)}
      onChange={onChange}
      ref={inputRef}
    />
    <label
      htmlFor={id}
      className={classNames(style.label, {
        "visually-hidden": !isVisibleLabel,
        [style.labelBorder]: isBorder,
      })}
    >
      {children}
    </label>
  </div>
);
