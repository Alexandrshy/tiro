import React from "react";

import { BackgroundImageItem } from "@components/aside/backgroundImageItem";
import { CanvasItem } from "@components/aside/canvas";
import { AsideList } from "@components/aside/list";
import { MockupsItem } from "@components/aside/mockups";
import { Footer } from "@components/footer";

import style from "./style.module.css";

/**
 * Sidebar with controls for forming previews
 */
export const Aside: React.FC = () => {
  const ITEMS = [
    { name: "mockups", component: MockupsItem },
    { name: "canvas", component: CanvasItem },
    {
      name: "background-image",
      component: BackgroundImageItem,
    },
  ];

  return (
    <AsideList>
      {ITEMS.map(({ name, component: Item }) => (
        <Item key={name} className={style.item} />
      ))}
      <Footer />
    </AsideList>
  );
};
