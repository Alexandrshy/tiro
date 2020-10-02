import { action, observable } from "mobx";

/**
 * Defining a store for working with image previews
 */
export class PreviewStore {
  @observable
  file: string | null = null;

  @observable
  blur: string = "0";

  @observable
  isBlur: boolean = false;

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

  @action
  changeBlur(value: string) {
    this.blur = value;
  }

  @action
  switchBlur() {
    this.isBlur = !this.isBlur;
  }
}

export type PreviewStoreType = {
  file: string | null;
  blur: string;
  isBlur: boolean;
  setFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
  changeBlur: (value: string) => void;
  switchBlur: () => void;
};
