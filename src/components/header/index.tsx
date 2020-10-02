import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Button } from "@components/button";
import { Logo } from "@components/logo";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Header
 */
export const Header: React.FC = observer(() => {
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

  return (
    <header className={style.header}>
      <Logo />
      <Button onClick={onDownload}>Download</Button>
    </header>
  );
});
