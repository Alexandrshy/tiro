import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  isVisibleLabel?: boolean;
  value: boolean;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Range slider field
 * @param {string} props.id - Control id
 * @param {boolean} props.isVisibleLabel - Is a visible label
 * @param {string} props.value - Value
 * @param {string} props.className - Additional className
 * @param {onChange} props.onChange - Method for handling input changes
 */
export const Switch: React.FC<PropsType> = ({
  id,
  isVisibleLabel = true,
  value,
  className,
  onChange,
  children,
}) => (
  <div className={style.wrapper}>
    <input
      id={id}
      type="checkbox"
      className={classNames(style.input, className)}
      onChange={onChange}
      checked={value}
    />
    <label htmlFor={id} className={style.label}>
      <span role="presentation" className={style.ball}></span>
      <span
        className={classNames({
          "visually-hidden": !isVisibleLabel,
        })}
      >
        {children}
      </span>
    </label>
  </div>
);
