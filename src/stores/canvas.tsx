import { action, computed, observable } from "mobx";

export type PreviewType =
  | "Dribbble"
  | "YouTube"
  | "Twitter"
  | "Instagram"
  | "LinkedIn"
  | "dev.to";
export type CanvasType = {
  width: string;
  height: string;
};

/**
 * Defining a store for working with canvas
 */
export class PreviewCanvas {
  @observable
  active: PreviewType = "Dribbble";

  @observable
  value: { [key: string]: CanvasType } = {
    Dribbble: {
      width: "1600",
      height: "1200",
    },
    YouTube: {
      width: "1280",
      height: "720",
    },
    Twitter: {
      width: "1024",
      height: "512",
    },
    Instagram: {
      width: "1080",
      height: "1080",
    },
    LinkedIn: {
      width: "1536",
      height: "768",
    },
    "dev.to": {
      width: "1000",
      height: "420",
    },
  };

  @computed
  get activeCanvas() {
    return this.value[this.active];
  }

  @action
  setCanvas(value: PreviewType) {
    this.active = value;
  }
}

export type PreviewCanvasType = {
  value: { [key: string]: CanvasType };
  active: PreviewType;
  activeCanvas: CanvasType;
  setCanvas: (value: PreviewType) => void;
};
