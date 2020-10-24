import { observer } from "mobx-react";
import React, { useCallback, useRef } from "react";

import { BlurSwitcher } from "@components/aside/blur";
import { Position } from "@components/aside/position";
import { Size } from "@components/aside/size";
import { Title } from "@components/aside/title";
import { Upload } from "@components/control/load";
import { Filler } from "@components/control/load/filler";
import { useStore } from "@stores/context";

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
          <Filler
            text={"Click or drag your background image"}
            file={file}
            changeFile={changeFile}
            removeFile={removeFile}
          />
        </Upload>
        {file && (
          <>
            <BlurSwitcher />
            <Position />
            <Size />
          </>
        )}
      </li>
    );
  }
);
