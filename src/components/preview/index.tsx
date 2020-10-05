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
              transform: `scale(${scale})`,
              width: `${width}px`,
              height: `${height}px`,
              backgroundImage: `url(${image})`,
              backgroundColor: bg,
              backgroundPosition: position,
              backgroundSize: size,
              filter: `blur(${blur}px)`,
            }}
          >
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
});
