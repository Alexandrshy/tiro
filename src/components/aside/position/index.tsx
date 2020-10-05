import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Select } from "@components/control/select";
import { Subtitle } from "@components/subtitle";
import { PreviewType } from "@stores/canvas";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Background position list
 */
export const Position: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input background position changes
   * @param {string} value - canvas
   */
  const onChangeHanlder = useCallback(
    (value: PreviewType) => {
      store.backgroundImage.setPostion(value);
    },
    [store.backgroundImage]
  );

  return (
    <div className={style.box}>
      <Subtitle text="Position" />
      <div className={style.wrapper}>
        <Select
          id="postion-select"
          options={store.backgroundImage.postion}
          isVisibleLabel={false}
          value={store.previewCanvas.active}
          onChange={onChangeHanlder}
        >
          Position
        </Select>
      </div>
    </div>
  );
});
