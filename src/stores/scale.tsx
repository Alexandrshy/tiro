import { action, observable } from "mobx";

/**
 * Defining a store for working with scale previews
 */
export class PreviewScale {
  @observable
  value: string = "35";

  @action
  setScale(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value) this.value = event.target.value;
  }
}

export type PreviewScaleType = {
  value: string;
  setScale: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
