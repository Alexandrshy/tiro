import { action, observable } from "mobx";

/**
 * Defining a store for working with image previews
 */
export class PreviewStore {
  @observable
  file: string | null = null;

  @action
  setFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0]) {
      this.file = URL.createObjectURL(event.target.files[0]);
    }
  }

  @action
  removeFile() {
    this.file = null;
  }
}

export type PreviewStoreType = {
  file: string | null;
  setFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
};
