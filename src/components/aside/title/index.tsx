import React from "react";

import style from "./style.module.css";

export type PropsType = {
  text: string;
};

/**
 * Title for the aside element
 * @param {string} props.text - Title text
 */
export const Title: React.FC<PropsType> = ({ text }) => {
  return <h3 className={style.title}>{text}</h3>;
};
