import { useLocalStore } from "mobx-react";
import React, { createContext, FC, useContext } from "react";

import { PreviewStore, PreviewStoreType } from "@stores/file-store";
import { PreviewScale, PreviewScaleType } from "@stores/scale";

/**
 * Create a context
 */
const StoreContext = createContext<{
  previewStore: PreviewStoreType;
  previewScale: PreviewScaleType;
} | null>(null);

/**
 * Using Provider to pass the store inside the component
 * @param {children} props - Component properties
 */
export const StoreProvider: FC = ({ children }) => {
  const store = useLocalStore(() => ({
    previewStore: new PreviewStore(),
    previewScale: new PreviewScale(),
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
