import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Input } from "@components/control/input";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Mockup size
 */
export const Size: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input width changes
   * @param {string} value - width
   */
  const onWidthChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setSize({ width: Number(value) });
    },
    [store.mockup]
  );

  /**
   * Handling input height changes
   * @param {string} value - height
   */
  const onHeightChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setSize({ height: Number(value) });
    },
    [store.mockup]
  );

  return (
    <>
      <Subtitle text="Size" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="mockup-width"
            isVisibleLabel={false}
            onChange={onWidthChangeHanlder}
            value={String(Math.ceil(store.mockup.size.width))}
            rightPointer="px"
            leftPointer="w"
            type="number"
            min="1"
            max="10000"
          >
            Mockup width
          </Input>
        </div>
        <div className={style.wrapper}>
          <Input
            id="mockup-height"
            isVisibleLabel={false}
            onChange={onHeightChangeHanlder}
            value={String(Math.ceil(store.mockup.size.height))}
            rightPointer="px"
            leftPointer="h"
            type="number"
            min="1"
            max="10000"
          >
            Mockup height
          </Input>
        </div>
      </div>
    </>
  );
});
