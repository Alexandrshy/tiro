import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Input } from "@components/control/input";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

export type PropsType = {
  index: number;
};

/**
 * Mockup size
 */
export const Size: React.FC<PropsType> = observer(({ index }) => {
  const store = useStore();

  /**
   * Handling input width changes
   * @param {string} value - width
   */
  const onWidthChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setSize({ width: Number(value) }, index);
    },
    [store.mockup, index]
  );

  /**
   * Handling input height changes
   * @param {string} value - height
   */
  const onHeightChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setSize({ height: Number(value) }, index);
    },
    [store.mockup, index]
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
            value={String(
              Math.ceil(
                store.mockup.options[store.mockup.activeMockup].size[index]
                  .width
              )
            )}
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
            value={String(
              Math.ceil(
                store.mockup.options[store.mockup.activeMockup].size[index]
                  .height
              )
            )}
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
