import classNames from "classnames";
import React from "react";

import style from "./style.module.css";

export type PropsType = {
  onClick?: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  label?: string;
  className?: string;
  color?: "white" | "dark" | "base";
  type?: "button" | "submit" | "reset";
  isFull?: boolean;
  isDisabled?: boolean;
};

/**
 * Basic Button Component
 * @param {string} props.label - Additional text for buttons without body text
 * @param {string} props.className - Class name for extending base styles
 * @param {string} props.color - Button color
 * @param {string} props.type - Button type
 * @param {boolean} props.isFull - Fill the button to the full width of the container
 * @param {boolean} props.isDisabled - Disabled state
 * @param {Function} props.onClick - Handling a button click
 */
export const Button: React.FC<PropsType> = ({
  children,
  label,
  className,
  color = "base",
  type = "button",
  isFull = false,
  isDisabled = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classNames(
        style.button,
        style[`button-${color}`],
        isFull && style.buttonFull,
        className
      )}
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
