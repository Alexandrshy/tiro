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
        width: previewWidth - previewWidth * 0.3,
        height: previewHeight - previewHeight * 0.3,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.previewCanvas.active]);

    /**
     * Center align
     */
    useEffect(() => {
      store.mockup.setPosition({
        x: previewWidth / 2 - store.mockup.options.basic.size[0].width / 2,
        y: previewHeight / 2 - store.mockup.options.basic.size[0].height / 2,
      });
    }, [
      previewWidth,
      previewHeight,
      store.mockup.options.basic.size,
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
        onStop={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        onMouseDown={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        position={{
          x: store.mockup.options[store.mockup.activeMockup].position[0].x,
          y: store.mockup.options[store.mockup.activeMockup].position[0].y,
        }}
      >
        <div
          className={style.canvas}
          style={{
            width: `${store.mockup.options.basic.size[0].width}px`,
            height: `${store.mockup.options.basic.size[0].height}px`,
          }}
        >
          <div
            className={style.box}
            style={{
              transform: `rotate(${store.mockup.options.basic.rotate}deg)`,
              backgroundImage: `url(${store.mockup.options.basic.file[0]})`,
              borderRadius: `${store.mockup.options.basic.border}px`,
            }}
          />
        </div>
      </Draggable>
    );
  }
);
