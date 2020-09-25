import { observer } from "mobx-react";
import React from "react";

import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Stylized range slider
 */
export const Slider: React.FC = observer(() => {
  const store = useStore();

  return (
    <div className={style.wrapper}>
      <div className={style.box}>
        <input
          id="scale-slider"
          type="range"
          className={style.input}
          value={store.previewScale.value}
          min="10"
          max="100"
          onChange={(event) => store.previewScale.setScale(event)}
        />
        <label htmlFor="scale-slider" className={style.label}>
          Changing the scale of the preview
        </label>
      </div>
    </div>
  );
});
