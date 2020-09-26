import React from "react";

import { Aside } from "@components/aside";
import { Slider } from "@components/control/slider";
import { Preview } from "@components/preview";

import style from "./style.module.css";

/**
 * Wrapping the aside and main part of the application
 */
export const Content: React.FC = () => {
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
