import { action, computed, observable } from "mobx";

export type MockupOptionsType = "basic" | "mobileOne";
export type OptionsType = {
  [key in MockupOptionsType]: {
    size: { width: number; height: number }[];
    position: { x: number; y: number }[];
    file: string[] | null[];
    rotate: number[];
    border: number[];
  };
};

/**
 * Defining a store for working with mockup
 */
export class Mockup {
  @observable
  options: OptionsType = {
    basic: {
      size: [{ width: 0, height: 0 }],
      position: [{ x: 0, y: 0 }],
      file: [null],
      rotate: [0],
      border: [45],
    },
    mobileOne: {
      size: [{ width: 0, height: 0 }],
      position: [{ x: 0, y: 0 }],
      file: [null],
      rotate: [0],
      border: [45],
    },
  };

  @observable
  activeMockup: MockupOptionsType = "basic";

  @action
  setActiveMockup(value: MockupOptionsType) {
    if (value) this.activeMockup = value;
  }

  @action
  setPosition({ x, y }: { x?: number; y?: number }, index?: number) {
    if (typeof x !== "undefined")
      this.options[this.activeMockup].position[index || 0].x = x;
    if (typeof y !== "undefined")
      this.options[this.activeMockup].position[index || 0].y = y;
  }

  @action
  setSize(
    { width, height }: { width?: number; height?: number },
    index?: number
  ) {
    if (width) this.options[this.activeMockup].size[index || 0].width = width;
    if (height)
      this.options[this.activeMockup].size[index || 0].height = height;
  }

  @action
  setRotate(value: number, index?: number) {
    this.options[this.activeMockup].rotate[index || 0] = value;
  }

  @action
  setBorder(value: number, index?: number) {
    this.options[this.activeMockup].border[index || 0] = value;
  }

  @action
  setFile(event: React.ChangeEvent<HTMLInputElement>, index: number) {
    if (event.target.files && event.target.files[0]) {
      this.options[this.activeMockup].file[index] = URL.createObjectURL(
        event.target.files[0]
      );
    }
  }

  @action
  removeFile(index: number) {
    this.options[this.activeMockup].file[index] = null;
  }

  @computed
  get length(): number {
    return this.options[this.activeMockup].size.length;
  }

  @computed
  get files(): string[] | null[] {
    return this.options[this.activeMockup].file;
  }
}

export type MockupType = {
  options: OptionsType;
  activeMockup: MockupOptionsType;
  setPosition: (value: { x?: number; y?: number }, index?: number) => void;
  setSize: (value: { width?: number; height?: number }, index?: number) => void;
  setActiveMockup: (value: MockupOptionsType) => void;
  setRotate: (value: number, index?: number) => void;
  setBorder: (value: number, index?: number) => void;
  setFile: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  removeFile: (index: number) => void;
  length: number;
  files: string[] | null[];
};
