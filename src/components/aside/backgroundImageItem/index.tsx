import classNames from "classnames";
import { observer } from "mobx-react";
import React, { useCallback, useRef } from "react";

import { BlurSwitcher } from "@components/aside/blur";
import { Title } from "@components/aside/title";
import { Upload } from "@components/control/load";
import { ReactComponent as SvgBasket } from "@images/basket.svg";
import { ReactComponent as SvgDragDrop } from "@images/drag-drop.svg";
import { ReactComponent as SvgEdit } from "@images/edit.svg";
import { useStore } from "@stores/context";

import style from "./style.module.css";

export type PropsType = {
  className?: string;
};

/**
 * Group of controls
 * @param {string} className - Class name for component
 */
export const BackgroundImageItem: React.FC<PropsType> = observer(
  ({ className }) => {
    const store = useStore();

    const inputRef = useRef<HTMLInputElement>(null);

    const changeFile = useCallback(() => {
      if (inputRef.current) inputRef.current.click();
    }, []);

    const removeFile = useCallback(
      (event) => {
        event.preventDefault();
        event.stopPropagation();
        store.backgroundImage.removeFile();
      },
      [store.backgroundImage]
    );

    const onChangeHandler = useCallback(
      (event) => store.backgroundImage.setFile(event),
      [store.backgroundImage]
    );
    const file = store.backgroundImage.file;

    return (
      <li className={className}>
        <Title text="Background image" />
        <Upload
          id="upload-background"
          onChange={onChangeHandler}
          inputRef={inputRef}
        >
          {!file && (
            <>
              <SvgDragDrop className={style.icon} />
              <p className={style.title}>Click or drag file to this area</p>
              <span className={style.subtitle}>PNG or JPEG only</span>
            </>
          )}
          {file && (
            <>
              <img className={style.img} src={file} alt="Uploaded preview" />
              <div className={style.box}>
                <button
                  type="button"
                  className={classNames(style.button, style.edit)}
                  onClick={changeFile}
                >
                  <SvgEdit className={style.icon} />
                </button>
                <button
                  type="button"
                  className={classNames(style.button, style.basket)}
                  onClick={removeFile}
                >
                  <SvgBasket className={style.icon} />
                </button>
              </div>
            </>
          )}
        </Upload>
        {file && <BlurSwitcher />}
      </li>
    );
  }
);
