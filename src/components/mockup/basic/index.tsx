import { autorun } from "mobx";
import { observer } from "mobx-react";
import React, { useCallback, useEffect } from "react";
import Draggable from "react-draggable";

import { useStore } from "@stores/context";

import style from "./style.module.css";

export type PropsType = {
  scale: number;
  previewWidth: number;
  previewHeight: number;
};

/**
 * Basic mockup
 * @param {number} scale - Scale values
 * @param {number} previewWidth - Preview width
 * @param {number} previewHeight - Preview height
 */
export const Basic: React.FC<PropsType> = observer(
  ({ scale, previewWidth, previewHeight }) => {
    const store = useStore();

    /**
     * Size calculation
     */
    useEffect(() => {
      store.mockup.setSize({
        width: previewWidth - previewWidth * 0.2,
        height: previewHeight - previewHeight * 0.2,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.previewCanvas.active]);

    /**
     * Center align
     */
    useEffect(() => {
      store.mockup.setPosition({
        x: previewWidth / 2 - store.mockup.size.width / 2,
        y: previewHeight / 2 - store.mockup.size.height / 2,
      });
    }, [
      previewWidth,
      previewHeight,
      store.mockup.size.width,
      store.mockup.size.height,
      store.mockup,
    ]);

    /**
     * Handling an item drag event
     */
    const onControlledDrag = useCallback(
      (_, position: { x: number; y: number }) => {
        const { x, y } = position;
        store.mockup.setPosition({ x, y });
      },
      [store.mockup]
    );

    return (
      <Draggable
        scale={scale}
        onDrag={onControlledDrag}
        position={{
          x: store.mockup.position[store.mockup.activeMockup].x,
          y: store.mockup.position[store.mockup.activeMockup].y,
        }}
      >
        <div
          className={style.canvas}
          style={{
            width: `${store.mockup.size.width}px`,
            height: `${store.mockup.size.height}px`,
          }}
        ></div>
      </Draggable>
    );
  }
);
