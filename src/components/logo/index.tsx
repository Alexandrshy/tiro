import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as SvgLogo } from "@images/logo.svg";

import style from "./style.module.css";

/**
 * Project logo and name
 */
export const Logo: React.FC = () => {
  return (
    <Link to="/" className={style.logo}>
      <SvgLogo className={style.icon} />
      <span className={style.name}>Tiro</span>
    </Link>
  );
};
