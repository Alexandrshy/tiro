import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Select } from "@components/control/select";
import { Subtitle } from "@components/subtitle";
import { PreviewType } from "@stores/canvas";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Size list
 */
export const Size: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input background size changes
   * @param {string} value - canvas
   */
  const onChangeHanlder = useCallback(
    (value: PreviewType) => {
      store.backgroundImage.setSize(value);
    },
    [store.backgroundImage]
  );

  return (
    <div className={style.box}>
      <Subtitle text="Size" />
      <div className={style.wrapper}>
        <Select
          id="size-select"
          options={store.backgroundImage.size}
          isVisibleLabel={false}
          value={store.previewCanvas.active}
          onChange={onChangeHanlder}
        >
          Size
        </Select>
      </div>
    </div>
  );
});
