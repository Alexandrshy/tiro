import classNames from "classnames";
import React from "react";

import { ReactComponent as SvgBasket } from "@images/basket.svg";
import { ReactComponent as SvgDragDrop } from "@images/drag-drop.svg";
import { ReactComponent as SvgEdit } from "@images/edit.svg";

import style from "./style.module.css";

export type PropsType = {
  file: string | null;
  changeFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
  removeFile: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text?: string;
};

/**
 * Filler for loading images
 */
export const Filler: React.FC<PropsType> = ({
  file,
  changeFile,
  removeFile,
  text = "Click or drag file to this area",
}) => {
  return (
    <>
      {!file && (
        <>
          <SvgDragDrop className={style.icon} />
          <p className={style.title}>{text}</p>
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
    </>
  );
};
