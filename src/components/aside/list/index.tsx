import React from "react";

import style from "./style.module.css";

/**
 * List of side groups
 */
export const AsideList: React.FC = ({ children }) => {
  return (
    <aside className={style.aside}>
      <ul className={style.list}>{children}</ul>
    </aside>
  );
};
