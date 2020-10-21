import React from "react";

import style from "./style.module.css";

export type PropsType = {
  text: string;
};

/**
 * Aside block subtitle
 */
export const Subtitle: React.FC<PropsType> = ({ text }) => {
  return <h4 className={style.title}>{text}</h4>;
};
