import { action, observable } from "mobx";

/**
 * Defining a store for working with image previews
 */
export class BackgroundImage {
  @observable
  file: string | null = null;

  @observable
  postion: string[] = [
    "Center",
    "Center Left",
    "Center Right",
    "Top Center",
    "Top Left",
    "Top Right",
    "Bottom Center",
    "Bottom Left",
    "Bottom Right",
  ];

  @observable
  size: string[] = ["Cover", "Auto", "Contain"];

  @observable
  activePosition: string = this.postion[0];

  @observable
  activeSize: string = this.size[0];

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

  @action
  setPostion(value: string) {
    this.activePosition = value;
  }

  @action
  setSize(value: string) {
    this.activeSize = value;
  }
}

export type BackgroundImageType = {
  file: string | null;
  postion: string[];
  size: string[];
  activePosition: string;
  activeSize: string;
  blur: string;
  isBlur: boolean;
  setFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: () => void;
  changeBlur: (value: string) => void;
  switchBlur: () => void;
  setPostion: (value: string) => void;
  setSize: (value: string) => void;
};
