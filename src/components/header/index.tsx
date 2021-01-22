import React from "react";

import { Logo } from "@components/logo";

import style from "./style.module.css";

/**
 * Header
 */
export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Logo />
    </header>
  );
};
