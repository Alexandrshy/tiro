import React from "react";

import style from "./style.module.css";

/**
 * List of controllers for the group
 */
export const List: React.FC = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>{children}</ul>
    </div>
  );
};
