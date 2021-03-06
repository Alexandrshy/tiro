import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Slider } from "@components/control/slider";
import { Subtitle } from "@components/subtitle";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Switch for setting the blur of the image
 */
export const BlurSwitcher: React.FC = observer(() => {
  const store = useStore();

  const onBlurHandler = useCallback(
    (value) => {
      store.backgroundImage.changeBlur(value);
    },
    [store.backgroundImage]
  );

  return (
    <div className={style.box}>
      <Subtitle text="Blur" />
      <div className={style.wrapper}>
        <Slider
          id="blur-slider"
          isVisibleLabel={false}
          min={0}
          max={25}
          value={store.backgroundImage.blur}
          onChange={onBlurHandler}
          theme="light"
        >
          Change the blur of an image
        </Slider>
      </div>
    </div>
  );
});
