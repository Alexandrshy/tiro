import { observer } from "mobx-react";
import React from "react";
import { validateHTMLColor } from "validate-color";

import { Mockup } from "@components/mockup";
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
  const color = converHexToRGBA(
    validateHTMLColor(store.previewColor.value)
      ? store.previewColor.value
      : DEFAULT_BG_COLOR,
    store.previewColor.opacity
  );
  const width = store.previewSize.width;
  const height = store.previewSize.height;
  const image = store.backgroundImage.file;
  const blur = store.backgroundImage.blur;
  const position = store.backgroundImage.activePosition.toLocaleLowerCase();
  const size = store.backgroundImage.activeSize.toLocaleLowerCase();

  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <div
          className={style.preview}
          style={{
            width: `${Number(width) * scale}px`,
            height: `${Number(height) * scale}px`,
          }}
        >
          <div
            id="preview"
            className={style.element}
            style={{
              backgroundColor: color,
              transform: `scale(${scale})`,
              width: `${width}px`,
              height: `${height}px`,
            }}
          >
            <div
              className={style.backgroundImage}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: position,
                backgroundSize: size,
                filter: `blur(${blur}px)`,
                transform: `scale(${Number(blur) * 0.002 + 1})`,
              }}
            ></div>
            <Mockup
              scale={scale}
              previewWidth={Number(width)}
              previewHeight={Number(height)}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
