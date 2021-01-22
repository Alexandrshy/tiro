import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Alignment } from "@components/aside/mockups/alignment";
import { BorderRadius } from "@components/aside/mockups/border";
import { File } from "@components/aside/mockups/file";
import { Position } from "@components/aside/mockups/position";
import { Rotate } from "@components/aside/mockups/rotate";
import { Size } from "@components/aside/mockups/size";
import { Title } from "@components/aside/title";
import { useStore } from "@stores/context";
import { MockupOptionsType } from "@stores/mockup";

import style from "./style.module.css";

export type PropsType = {
  className?: string;
};

/**
 * Group of controls
 * @param {string} className - Class name for component
 */
export const MockupsItem: React.FC<PropsType> = observer(({ className }) => {
  const CONTROL = [
    {
      title: "position",
      component: Position,
    },
    {
      title: "size",
      component: Size,
    },
    {
      title: "rotate",
      component: Rotate,
    },
    {
      title: "border",
      component: BorderRadius,
    },
    {
      title: "file",
      component: File,
    },
  ];
  const store = useStore();

  const options = store.mockup.options;
  const sizeList = new Array(store.mockup.length).fill("");

  /**
   * Handling a click on a select mockup
   * @param {MockupOptionsType} value - key representing the mockup
   */
  const chooseMockup = useCallback(
    (value: MockupOptionsType) => () => {
      store.mockup.setActiveMockup(value);
    },
    [store.mockup]
  );

  return (
    <li className={className}>
      <Title text="Mockups" />
      <ul className={style.list}>
        {Object.keys(options).map((key) => (
          <li
            key={key}
            className={classNames(style.item, {
              [style.itemIsActive]: key === store.mockup.activeMockup,
            })}
          >
            <button
              className={classNames(style.button, {
                [style.buttonBasic]: key === "basic",
                [style.buttonMobileOne]: key === "mobileOne",
              })}
              type="button"
              onClick={chooseMockup(key as MockupOptionsType)}
            ></button>
          </li>
        ))}
      </ul>
      <Alignment />
      {sizeList.map((_, index) => (
        <ul className={style.listControl} key={`control-${index}`}>
          {CONTROL.map(({ title, component: Component }) => (
            <li
              className={classNames(style.itemControl, {
                [style.itemFileControl]: title === "file",
              })}
              key={title}
            >
              <Component index={index} />
            </li>
          ))}
        </ul>
      ))}
    </li>
  );
});
