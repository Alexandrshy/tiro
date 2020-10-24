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
 * Border radius mockup
 */
export const BorderRadius: React.FC<PropsType> = observer(({ index }) => {
  const store = useStore();

  const borderRadius =
    store.mockup.options[store.mockup.activeMockup].border[index];

  /**
   * Handling input border radius changes
   * @param {string} value - value
   */
  const onBorderRadiusChangeHanlder = useCallback(
    (value: string) => {
      store.mockup.setBorder(Number(value), index);
    },
    [store.mockup, index]
  );

  if (typeof borderRadius === "undefined") return null;

  return (
    <>
      <Subtitle text="Border" />
      <div className={style.box}>
        <div className={style.wrapper}>
          <Input
            id="mockup-border-radius"
            isVisibleLabel={false}
            onChange={onBorderRadiusChangeHanlder}
            value={String(borderRadius)}
            rightPointer="&#216;"
            type="number"
            min="0"
            max="200"
          >
            Mockup border radius
          </Input>
        </div>
        <div className={style.wrapper}>
          <Slider
            id="border-radius-slider"
            isVisibleLabel={false}
            min={0}
            max={200}
            onChange={onBorderRadiusChangeHanlder}
            value={String(borderRadius)}
            theme="light"
          >
            Mockup border radius slider
          </Slider>
        </div>
      </div>
    </>
  );
});
