import classNames from "classnames";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { BackgroundImageItem } from "@components/aside/backgroundImageItem";
import { CanvasItem } from "@components/aside/canvas";
import { MockupsItem } from "@components/aside/mockups";
import { Button } from "@components/button";
import { Footer } from "@components/footer";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Sidebar with controls for forming previews
 */
export const Aside: React.FC = observer(() => {
  const store = useStore();

  const onDownload = useCallback(() => {
    const element = document.getElementById("preview");

    if (element) {
      domtoimage
        .toBlob(element, {
          width: Number(store.previewSize.width),
          height: Number(store.previewSize.height),
          style: {
            width: `${Number(store.previewSize.width)}px`,
            height: `${Number(store.previewSize.height)}px`,
            transform: "scale(1)",
          },
        })
        .then((blob) => saveAs(blob, "tiro-preview.png"))
        .catch((error) => console.error(error));
    }
  }, [store.previewSize.height, store.previewSize.width]);

  const ITEMS = [
    { name: "mockups", component: MockupsItem },
    { name: "canvas", component: CanvasItem },
    {
      name: "background-image",
      component: BackgroundImageItem,
    },
  ];

  return (
    <aside
      className={classNames(style.aside, {
        [style.isActive]: store.navigation.isFilterOpen,
      })}
    >
      <div className={style.wrapper}>
        <ul className={style.list}>
          {ITEMS.map(({ name, component: Item }) => (
            <Item key={name} className={style.item} />
          ))}
        </ul>
        <Footer />
      </div>
      <div className={style.buttonWrapper}>
        <Button onClick={onDownload}>Download</Button>
      </div>
    </aside>
  );
});
