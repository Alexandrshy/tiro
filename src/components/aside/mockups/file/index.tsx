import { observer } from "mobx-react";
import React, { useCallback, useRef } from "react";

import { Upload } from "@components/control/load";
import { Filler } from "@components/control/load/filler";
import { useStore } from "@stores/context";

export type PropsType = {
  index: number;
};

/**
 * Mockup file
 */
export const File: React.FC<PropsType> = observer(({ index }) => {
  const store = useStore();

  const inputRef = useRef<HTMLInputElement>(null);

  const changeFile = useCallback(() => {
    if (inputRef.current) inputRef.current.click();
  }, []);

  const removeFile = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      store.mockup.removeFile(index);
    },
    [index, store.mockup]
  );

  const onChangeHandler = useCallback(
    (event) => store.mockup.setFile(event, index),
    [store.mockup, index]
  );

  return (
    <>
      <Upload
        id={`upload-image-${index}`}
        onChange={onChangeHandler}
        inputRef={inputRef}
      >
        <Filler
          text={"Click or drag your design"}
          file={store.mockup.files[index]}
          changeFile={changeFile}
          removeFile={removeFile}
        />
      </Upload>
    </>
  );
});
