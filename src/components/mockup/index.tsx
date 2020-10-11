import { observer } from "mobx-react";
import React from "react";

import { Basic } from "@components/mockup/basic";
import { MobileOne } from "@components/mockup/mobile_1";
import { useStore } from "@stores/context";

export type PropsType = {
  scale: number;
  previewWidth: number;
  previewHeight: number;
};

/**
 * Basic mockup work
 * @param {number} scale - Scale values
 * @param {number} previewWidth - Preview width
 * @param {number} previewHeight - Preview height
 */
export const Mockup: React.FC<PropsType> = observer(
  ({ scale, previewWidth, previewHeight }) => {
    const store = useStore();

    const Component = {
      basic: (
        <Basic
          scale={scale}
          previewWidth={previewWidth}
          previewHeight={previewHeight}
        />
      ),
      mobileOne: (
        <MobileOne
          scale={scale}
          previewWidth={previewWidth}
          previewHeight={previewHeight}
        />
      ),
    };

    return Component[store.mockup.activeMockup];
  }
);
