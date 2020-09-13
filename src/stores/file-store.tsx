import { observable, action } from "mobx";

/**
 * Defining a store for working with image previews
 */
export class PreviewStore {
  @observable
  file: number | null = null;

  @action
  setFile(event: React.MouseEvent) {
    console.log("event2", event);
    this.file = 10;
  }
}

export type PreviewStoreType = {
  file: number | null;
  setFile: (event: React.MouseEvent) => void;
};
