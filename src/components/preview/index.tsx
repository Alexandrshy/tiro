import { observer } from "mobx-react";
import React from "react";

import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Preview of the resulting post
 */
export const Preview: React.FC = observer(() => {
  const store = useStore();
  const scale = Number(store.previewScale.value) / 100;

  return (
    <div
      className={style.wrapper}
      style={{
        backgroundColor: "#f7fafc",
      }}
    >
      <div className={style.box}>
        <div
          className={style.preview}
          style={{
            width: `${1600 * scale}px`,
            height: `${1200 * scale}px`,
          }}
        >
          <div
            className={style.element}
            style={{
              transform: `scale(${scale})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
});
