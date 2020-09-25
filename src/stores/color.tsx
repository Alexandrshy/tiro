import { action, observable } from "mobx";

import { DEFAULT_BG_COLOR, DEFAULT_OPACITY_COLOR } from "@constants/color";

/**
 * Defining a store for working with fill color
 */
export class PreviewColor {
  @observable
  value: string = DEFAULT_BG_COLOR;

  @observable
  opacity: string = DEFAULT_OPACITY_COLOR;

  @action
  setColor(value: string) {
    this.value = value;
  }

  @action
  setOpacity(value: string) {
    this.opacity = value.replace(/[^\d]+/g, "");
  }
}

export type PreviewColorType = {
  value: string;
  opacity: string;
  setColor: (value: string) => void;
  setOpacity: (value: string) => void;
};
