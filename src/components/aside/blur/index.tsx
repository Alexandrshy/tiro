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
    (event) => {
      if (event.target.value) store.previewStore.changeBlur(event.target.value);
    },
    [store.previewStore]
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
          value={store.previewStore.blur}
          onChange={onBlurHandler}
          theme="light"
        >
          Changing the scale of the preview
        </Slider>
      </div>
    </div>
  );
});
