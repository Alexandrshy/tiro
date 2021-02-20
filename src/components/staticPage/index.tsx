import React from "react";

import style from "./style.module.css";

export const StaticPage: React.FC = ({ children }) => (
  <div className={style.wrapper}>{children}</div>
);
