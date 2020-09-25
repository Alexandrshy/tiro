import React from "react";

import { Aside } from "@components/aside";
import { Slider } from "@components/control/slider";
import { Preview } from "@components/preview";

import style from "./style.module.css";

export const Content: React.FC = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <Aside />
      <main className={style.mian}>
        <Preview />
        <Slider />
      </main>
    </div>
  );
};