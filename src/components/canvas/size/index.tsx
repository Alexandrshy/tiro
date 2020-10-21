import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Input } from "@components/control/input";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Element with size setting
 */
export const InputSize: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input width changes
   * @param {string} value - width
   */
  const onWidthChangeHanlder = useCallback(
    (value: string) => {
      store.previewSize.setSize({ width: value });
    },
    [store.previewSize]
  );

  /**
   * Handling input height changes
   * @param {string} value - width
   */
  const onHeightChangeHanlder = useCallback(
    (value: string) => store.previewSize.setSize({ height: value }),
    [store.previewSize]
  );

  return (
    <li>
      <Subtitle text="Size" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="canvas-width"
            isVisibleLabel={false}
            onChange={onWidthChangeHanlder}
            value={store.previewSize.width}
            rightPointer="px"
            leftPointer="w"
            type="number"
          >
            Width
          </Input>
        </div>
        <div className={style.wrapper}>
          <Input
            id="canvas-height"
            isVisibleLabel={false}
            onChange={onHeightChangeHanlder}
            value={store.previewSize.height}
            rightPointer="px"
            leftPointer="h"
            type="number"
          >
            Height
          </Input>
        </div>
      </div>
    </li>
  );
});
