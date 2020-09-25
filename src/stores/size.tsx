import { action, observable } from "mobx";

import { DEFAULT_WIDTH } from "@constants/size";

export type ValueType = { width: number; height: number };

/**
 * Defining a store for working with preview size
 */
export class PreviewSize {
  @observable
  width: number = DEFAULT_WIDTH;

  @observable
  height: number = DEFAULT_WIDTH;

  @action
  setSize({ width, height }: ValueType) {
    if (width) this.width = width;
    if (height) this.height = height;
  }
}

export type PreviewSizeType = {
  width: number;
  height: number;
  setSize: (value: ValueType) => void;
};
