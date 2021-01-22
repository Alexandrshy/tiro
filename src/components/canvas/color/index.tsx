import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useCallback } from "react";
import { validateHTMLColor } from "validate-color";

import { ColorPicker } from "@components/control/color";
import { Input } from "@components/control/input";
import { Subtitle } from "@components/subtitle";
import { DEFAULT_BG_COLOR, DEFAULT_OPACITY_COLOR } from "@constants/color";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * Element with color setting
 */
export const InputColor: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling input color changes
   * @param {string} value - hex color
   */
  const onChangeHanlder = useCallback(
    (value: string) => store.previewColor.setColor(value),
    [store.previewColor]
  );

  /**
   * Handling change of focus input with color
   */
  const onValidateHandler = useCallback(() => {
    const currentColor = store.previewColor.value;
    if (!validateHTMLColor(currentColor))
      store.previewColor.setColor(DEFAULT_BG_COLOR);
  }, [store.previewColor]);

  /**
   * Handling input opacity changes
   * @param {string} value - opacity value
   */
  const onOpacityChangeHanlder = useCallback(
    (value: string) => store.previewColor.setOpacity(value),
    [store.previewColor]
  );

  /**
   * Handling change of focus input with opacity
   */
  const onValidateOpacityHandler = useCallback(() => {
    const currentOpacity = store.previewColor.opacity;
    if (Number(currentOpacity) > 100 || Number(currentOpacity) < 0)
      store.previewColor.setOpacity(DEFAULT_OPACITY_COLOR);
  }, [store.previewColor]);

  return (
    <li>
      <Subtitle text="Color" />
      <div className={style.box}>
        <div className={style.inputColorWrapper}>
          <ColorPicker
            id="canvas-color-picker"
            onChange={onChangeHanlder}
            value={store.previewColor.value}
          />
          <Input
            id="canvas-color"
            isVisibleLabel={false}
            onChange={onChangeHanlder}
            onBlur={onValidateHandler}
            className={style.inputColor}
            value={store.previewColor.value}
            isDisabled
          >
            Color
          </Input>
        </div>
        <div
          className={classNames(
            style.inputColorWrapper,
            style.inputColorWrapperNarrow
          )}
        >
          <Input
            id="canvas-opacity"
            isVisibleLabel={false}
            onChange={onOpacityChangeHanlder}
            onBlur={onValidateOpacityHandler}
            value={store.previewColor.opacity}
            rightPointer="%"
            type="number"
            min="0"
            max="100"
          >
            Opacity
          </Input>
        </div>
      </div>
    </li>
  );
});
