import React from "react";

import { Upload } from "@components/aside/load";
import { Title } from "@components/aside/title";
import { Footer } from "@components/footer";

import style from "./style.module.css";

/**
 * Sidebar with controls for forming previews
 */
export const Aside: React.FC = () => {
  return (
    <aside className={style.aside}>
      <ul className={style.list}>
        <li className={style.item}>
          <Title text="Background image" />
          <Upload />
        </li>
        <li className={style.item}>
          <Title text="Canvas options" />
        </li>
      </ul>
      <Footer />
    </aside>
  );
};
