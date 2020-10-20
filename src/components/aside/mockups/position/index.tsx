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
 * Mockup position on canvas
 */
export const Position: React.FC<PropsType> = observer(({ index }) => {
  const store = useStore();

  const position =
    store.mockup.options[store.mockup.activeMockup].position[index];

  /**
   * Handling input horizontal position changes
   * @param {string} value - horizontal position
   */
  const onPositionXChangeHanlder = useCallback(
    (value: string) => {
      if (!value) store.mockup.setPosition({ x: 0 }, index);
      store.mockup.setPosition({ x: Number(value) }, index);
    },
    [store.mockup, index]
  );

  /**
   * Handling input vertical position changes
   * @param {string} value - vertical position
   */
  const onPositionYChangeHanlder = useCallback(
    (value: string) => {
      if (!value) store.mockup.setPosition({ y: 0 }, index);
      store.mockup.setPosition({ y: Number(value) }, index);
    },
    [store.mockup, index]
  );

  if (typeof position === "undefined") return null;

  return (
    <>
      <Subtitle text="Position" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="mockup-position-x"
            isVisibleLabel={false}
            onChange={onPositionXChangeHanlder}
            value={String(Math.ceil(position.x))}
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
            value={String(Math.ceil(position.y))}
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
