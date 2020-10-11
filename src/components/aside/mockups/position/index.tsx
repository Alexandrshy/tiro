import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Input } from "@components/control/input";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Mockup position on canvas
 */
export const Position: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input horizontal position changes
   * @param {string} value - horizontal position
   */
  const onPositionXChangeHanlder = useCallback(
    (value: string) => {
      if (!value) store.mockup.setPosition({ x: 0 });
      store.mockup.setPosition({ x: Number(value) });
    },
    [store.mockup]
  );

  /**
   * Handling input vertical position changes
   * @param {string} value - vertical position
   */
  const onPositionYChangeHanlder = useCallback(
    (value: string) => {
      if (!value) store.mockup.setPosition({ y: 0 });
      store.mockup.setPosition({ y: Number(value) });
    },
    [store.mockup]
  );

  return (
    <>
      <Subtitle text="Position" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="mockup-position-x"
            isVisibleLabel={false}
            onChange={onPositionXChangeHanlder}
            value={String(
              Math.ceil(store.mockup.position[store.mockup.activeMockup].x)
            )}
            rightPointer="px"
            leftPointer="x"
            type="number"
            min="-10000"
            max="10000"
          >
            Horizontal position
          </Input>
        </div>
        <div className={style.wrapper}>
          <Input
            id="mockup-position-y"
            isVisibleLabel={false}
            onChange={onPositionYChangeHanlder}
            value={String(
              Math.ceil(store.mockup.position[store.mockup.activeMockup].y)
            )}
            rightPointer="px"
            leftPointer="y"
            type="number"
            min="-10000"
            max="10000"
          >
            Vertical position
          </Input>
        </div>
      </div>
    </>
  );
});
