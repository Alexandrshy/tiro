import { action, observable } from "mobx";

export type MockupOptionsType = "basic" | "mobileOne";

/**
 * Defining a store for working with mockup
 */
export class Mockup {
  @observable
  options: { key: MockupOptionsType; name: string }[] = [
    {
      key: "basic",
      name: "Basic",
    },
    {
      key: "mobileOne",
      name: "Mobile",
    },
  ];

  @observable
  activeMockup: MockupOptionsType = "basic";

  @observable
  position: { [key: string]: { x: number; y: number } } = {
    basic: { x: 0, y: 0 },
    mobileOne: { x: 0, y: 0 },
  };

  @observable
  size: { width: number; height: number } = { width: 0, height: 0 };

  @action
  setActiveMockup(value: MockupOptionsType) {
    if (value) this.activeMockup = value;
  }

  @action
  setPosition({ x, y }: { x?: number; y?: number }) {
    if (typeof x !== "undefined") this.position[this.activeMockup].x = x;
    if (typeof y !== "undefined") this.position[this.activeMockup].y = y;
  }

  @action
  setSize({ width, height }: { width?: number; height?: number }) {
    if (width) this.size.width = width;
    if (height) this.size.height = height;
  }
}

export type MockupType = {
  options: { key: MockupOptionsType; name: string }[];
  activeMockup: MockupOptionsType;
  position: { [key: string]: { x: number; y: number } };
  size: { width: number; height: number };
  setPosition: (value: { x?: number; y?: number }) => void;
  setSize: (value: { width?: number; height?: number }) => void;
  setActiveMockup: (value: MockupOptionsType) => void;
};
