import { useLocalStore } from "mobx-react";
import React, { createContext, FC, useContext } from "react";

import { PreviewCanvas, PreviewCanvasType } from "@stores/canvas";
import { PreviewColor, PreviewColorType } from "@stores/color";
import { Mockup, MockupType } from "@stores/mockup";
import { Navigation, NavigationType } from "@stores/navigation";
import { BackgroundImage, BackgroundImageType } from "@stores/preview";
import { PreviewScale, PreviewScaleType } from "@stores/scale";
import { PreviewSize, PreviewSizeType } from "@stores/size";

/**
 * Create a context
 */
const StoreContext = createContext<{
  backgroundImage: BackgroundImageType;
  previewScale: PreviewScaleType;
  previewColor: PreviewColorType;
  previewSize: PreviewSizeType;
  previewCanvas: PreviewCanvasType;
  mockup: MockupType;
  navigation: NavigationType;
} | null>(null);

/**
 * Using Provider to pass the store inside the component
 * @param {children} props - Component properties
 */
export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(() => ({
    backgroundImage: new BackgroundImage(),
    previewScale: new PreviewScale(),
    previewColor: new PreviewColor(),
    previewSize: new PreviewSize(),
    previewCanvas: new PreviewCanvas(),
    mockup: new Mockup(),
    navigation: new Navigation(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

/**
 * Custom hook for getting store from context
 */
export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) throw new Error("useStore must be used within a StoreProvider");

  return store;
};
