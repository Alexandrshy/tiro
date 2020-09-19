import React from "react";

import { Aside } from "@components/aside";

import style from "./style.module.css";

export const Content: React.FC = ({ children }) => {
  return (
    <div className={style.main}>
      <Aside />
      <main className={style.temp}></main>
    </div>
  );
};
