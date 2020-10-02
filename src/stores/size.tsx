import { action, observable } from "mobx";

import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "@constants/size";

export type ValueType = { width?: string; height?: string };

/**
 * Defining a store for working with preview size
 */
export class PreviewSize {
  @observable
  width: string = DEFAULT_WIDTH;

  @observable
  height: string = DEFAULT_HEIGHT;

  @action
  setSize({ width, height }: ValueType) {
    if (width !== undefined) this.width = width.replace(/[^\d]+/g, "");
    if (height !== undefined) this.height = height.replace(/[^\d]+/g, "");
  }
}

export type PreviewSizeType = {
  width: string;
  height: string;
  setSize: (value: ValueType) => void;
};
