import { action, observable } from "mobx";

/**
 * Defining a store for working with scale previews
 */
export class PreviewScale {
  @observable
  value: string = window.screen.width > 625 ? "35" : "20";

  @action
  setScale(value: string) {
    this.value = value;
  }
}

export type PreviewScaleType = {
  value: string;
  setScale: (value: string) => void;
};
