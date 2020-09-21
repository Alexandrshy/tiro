import { observer } from "mobx-react";
import React from "react";

import { ReactComponent as SvgDownload } from "@images/download.svg";
import { useStore } from "@stores/context";

import style from "./style.module.css";

/**
 * File upload control
 */
export const Upload: React.FC = observer(() => {
  const store = useStore();

  return (
    <div className={style.wrapper}>
      <input
        id="upload-background"
        type="file"
        accept="image/png, image/jpeg"
        className={style.input}
        onChange={(event) => store.previewStore.setFile(event)}
      />
      <label htmlFor="upload-background" className={style.label}>
        <SvgDownload className={style.logo} />
        <p className={style.title}>Click or drag file to this area</p>
        <span className={style.subtitle}>PNG or JPEG only</span>
      </label>
    </div>
  );
});
