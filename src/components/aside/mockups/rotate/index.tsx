import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Input } from "@components/control/input";
import { Slider } from "@components/control/slider";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

export type PropsType = {
  index: number;
};

/**
 * Rotate mockup
 */
export const Rotate: React.FC<PropsType> = observer(({ index }) => {
  const store = useStore();

  const rotate = store.mockup.options[store.mockup.activeMockup].rotate[index];

  /**
   * Handling input rotate changes
   * @param {string} value - width
   */
  const onRotateChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setRotate(Number(value), index);
    },
    [store.mockup, index]
  );

  if (typeof rotate === "undefined") return null;

  return (
    <>
      <Subtitle text="Rotate" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="mockup-rotate"
            isVisibleLabel={false}
            onChange={onRotateChangeHanlder}
            value={String(rotate)}
            rightPointer="&#176;"
            type="number"
            min="-180"
            max="180"
          >
            Mockup rotate
          </Input>
        </div>
        <div className={style.wrapper}>
          <Slider
            id="rotate-slider"
            isVisibleLabel={false}
            min={-180}
            max={180}
            value={String(rotate)}
            onChange={onRotateChangeHanlder}
            theme="light"
          >
            Mockup rotate slider
          </Slider>
        </div>
      </div>
    </>
  );
});
