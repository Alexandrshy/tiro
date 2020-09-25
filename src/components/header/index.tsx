import React from "react";

import { Button } from "@components/button";
import { Logo } from "@components/logo";

import style from "./style.module.css";

/**
 * Header
 */
export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Logo />
      <Button>Download</Button>
    </header>
  );
};
