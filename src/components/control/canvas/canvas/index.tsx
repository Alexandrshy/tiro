import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Select } from "@components/control/select";
import { Subtitle } from "@components/subtitle";
import { PreviewType } from "@stores/canvas";
import { useStore } from "@stores/context";

/**
 * Element with canvas setting
 */
export const Canvas: React.FC = observer(() => {
  const store = useStore();

  const options = Object.keys(store.previewCanvas.value);

  /**
   * Handling input canvas changes
   * @param {string} value - canvas
   */
  const onChangeHanlder = useCallback(
    (value: PreviewType) => {
      store.previewCanvas.setCanvas(value);
      const size = store.previewCanvas.activeCanvas;
      store.previewSize.setSize(size);
    },
    [store.previewCanvas, store.previewSize]
  );

  return (
    <li>
      <Subtitle text="Canvas" />
      <Select
        id="canvas-select"
        options={options}
        isVisibleLabel={false}
        value={store.previewCanvas.active}
        onChange={onChangeHanlder}
      >
        Canvas
      </Select>
    </li>
  );
});
