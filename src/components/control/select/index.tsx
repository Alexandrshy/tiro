import classNames from "classnames";
import React, { useCallback } from "react";

import { PreviewType } from "@stores/canvas";

import style from "./style.module.css";

export type PropsType = {
  id: string;
  options: string[];
  isVisibleLabel?: boolean;
  className?: string;
  value: string;
  onChange: (value: PreviewType) => void;
};

/**
 * Dropdown list
 * @param {string} props.id - Control id
 * @param {Array<string>} props.options - Option List
 * @param {boolean} props.isVisibleLabel - Is a visible label
 * @param {string} props.className - Additional className
 * @param {string} props.value - Value
 * @param {onChange} props.onChange - Method for handling input changes
 */
export const Select: React.FC<PropsType> = ({
  id,
  options,
  isVisibleLabel = true,
  className,
  onChange,
  children,
}) => {
  const onChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(event.target.value as PreviewType),
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
      <select
        id={id}
        className={classNames(style.select, className)}
        onChange={onChangeHandler}
      >
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
