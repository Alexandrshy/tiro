import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Aside } from "@components/aside";
import { Slider } from "@components/control/slider";
import { Preview } from "@components/preview";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Wrapping the aside and main part of the application
 */
export const Content: React.FC = observer(() => {
  const store = useStore();
  const onChangehandler = useCallback(
    (event) => store.previewScale.setScale(event),
    [store.previewScale]
  );

  return (
    <div className={style.wrapper}>
      <Aside />
      <main className={style.mian}>
        <Preview />
        <Slider
          id="scale-slider"
          isVisibleLabel={false}
          min={10}
          value={store.previewScale.value}
          onChange={onChangehandler}
        >
          Changing the scale of the preview
        </Slider>
      </main>
    </div>
  );
});
