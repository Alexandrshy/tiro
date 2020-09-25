import { observer } from "mobx-react";
import React from "react";
import { validateHTMLColor } from "validate-color";

import { DEFAULT_BG_COLOR } from "@constants/color";
import { converHexToRGBA } from "@helpers/color";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Preview of the resulting post
 */
export const Preview: React.FC = observer(() => {
  const store = useStore();

  const scale = Number(store.previewScale.value) / 100;
  const bg = converHexToRGBA(
    validateHTMLColor(store.previewColor.value)
      ? store.previewColor.value
      : DEFAULT_BG_COLOR,
    store.previewColor.opacity
  );
  const size = store.previewCanvas.value[store.previewCanvas.active];

  return (
    <div
      className={style.wrapper}
      style={{
        backgroundColor: bg,
      }}
    >
      <div className={style.box}>
        <div
          className={style.preview}
          style={{
            width: `${size.width * scale}px`,
            height: `${size.height * scale}px`,
          }}
        >
          <div
            className={style.element}
            style={{
              transform: `scale(${scale})`,
              width: size.width,
              height: size.height,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
});
