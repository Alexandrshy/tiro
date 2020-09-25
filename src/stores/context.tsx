import { useLocalStore } from "mobx-react";
import React, { createContext, FC, useContext } from "react";

import { PreviewCanvas, PreviewCanvasType } from "@stores/canvas";
import { PreviewColor, PreviewColorType } from "@stores/color";
import { PreviewStore, PreviewStoreType } from "@stores/file-store";
import { PreviewScale, PreviewScaleType } from "@stores/scale";
import { PreviewSize, PreviewSizeType } from "@stores/size";

/**
 * Create a context
 */
const StoreContext = createContext<{
  previewStore: PreviewStoreType;
  previewScale: PreviewScaleType;
  previewColor: PreviewColorType;
  previewSize: PreviewSizeType;
  previewCanvas: PreviewCanvasType;
} | null>(null);

/**
 * Using Provider to pass the store inside the component
 * @param {children} props - Component properties
 */
export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(() => ({
    previewStore: new PreviewStore(),
    previewScale: new PreviewScale(),
    previewColor: new PreviewColor(),
    previewSize: new PreviewSize(),
    previewCanvas: new PreviewCanvas(),
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
