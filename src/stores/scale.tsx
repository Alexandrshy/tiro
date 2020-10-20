import { action, observable } from "mobx";

/**
 * Defining a store for working with scale previews
 */
export class PreviewScale {
  @observable
  value: string = "35";

  @action
  setScale(value: string) {
    this.value = value;
  }
}

export type PreviewScaleType = {
  value: string;
  setScale: (value: string) => void;
};
