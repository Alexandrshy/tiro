import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { ReactComponent as LayoutAlignBottom } from "@images/layout-align-bottom.svg";
import { ReactComponent as LayoutAlignCenter } from "@images/layout-align-center.svg";
import { ReactComponent as LayoutAlignLeft } from "@images/layout-align-left.svg";
import { ReactComponent as LayoutAlignMiddle } from "@images/layout-align-middle.svg";
import { ReactComponent as LayoutAlignRight } from "@images/layout-align-right.svg";
import { ReactComponent as LayoutAlignTop } from "@images/layout-align-top.svg";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * List of buttons for quick alignment
 */
export const Alignment: React.FC = observer(() => {
  const store = useStore();

  /**
   * Handling a click to align the mockup with the canvas
   */
  const onClickHandler = useCallback(
    (value: string) => {
      const {
        width: canvasWidth,
        height: canvasHeight,
      } = store.previewCanvas.activeCanvas;
      switch (value) {
        case "left":
          store.mockup.setPosition({ x: 0 });
          break;
        case "center":
          store.mockup.setPosition({
            x: Number(canvasWidth) / 2 - store.mockup.size.width / 2,
          });
          break;
        case "right":
          store.mockup.setPosition({
            x: Number(canvasWidth) - Number(store.mockup.size.width),
          });
          break;
        case "top":
          store.mockup.setPosition({ y: 0 });
          break;
        case "middle":
          store.mockup.setPosition({
            y: Number(canvasHeight) / 2 - store.mockup.size.height / 2,
          });
          break;
        case "bottom":
          store.mockup.setPosition({
            y: Number(canvasHeight) - Number(store.mockup.size.height),
          });
          break;
      }
    },
    [store.mockup, store.previewCanvas.activeCanvas]
  );

  const ICONS = [
    {
      key: "left",
      label: "Left alignment",
      icon: LayoutAlignLeft,
    },
    {
      key: "center",
      label: "Center alignment",
      icon: LayoutAlignCenter,
    },
    {
      key: "right",
      label: "Right alignment",
      icon: LayoutAlignRight,
    },
    {
      key: "top",
      label: "Top alignment",
      icon: LayoutAlignTop,
    },
    {
      key: "middle",
      label: "Middle alignment",
      icon: LayoutAlignMiddle,
    },
    {
      key: "bottom",
      label: "Bottom alignment",
      icon: LayoutAlignBottom,
    },
  ];

  return (
    <ul className={style.list}>
      {ICONS.map(({ key, label, icon: Component }) => (
        <li key={key} className={style.item}>
          <button
            type="button"
            aria-label={label}
            className={style.button}
            onClick={() => onClickHandler(key)}
          >
            <Component />
          </button>
        </li>
      ))}
    </ul>
  );
});