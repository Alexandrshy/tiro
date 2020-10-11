import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useCallback } from "react";

import { Alignment } from "@components/aside/mockups/alignment";
import { Position } from "@components/aside/mockups/position";
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
  ];
  const store = useStore();

  const options = store.mockup.options;

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
        {options.map(({ key, name }) => (
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
              onClick={chooseMockup(key)}
            ></button>
            <span className={style.name}>{name}</span>
          </li>
        ))}
      </ul>
      <Alignment />
      <ul>
        {CONTROL.map(({ title, component: Component }) => (
          <li className={style.itemControl} key={title}>
            <Component />
          </li>
        ))}
      </ul>
    </li>
  );
});
