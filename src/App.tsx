import React, { useEffect } from "react";
import { autorun } from "mobx";
import { observer } from "mobx-react";

import { useStore } from "./stores/context";

const App = observer(() => {
  const store = useStore();
  const test = autorun(() => {
    console.log("props.test9", store.previewStore.file);
  });

  useEffect(() => test);

  return (
    <>
      <h1
        onClick={() =>
          console.log("store.fileStore.file", store.previewStore.file)
        }
      >
        {store.previewStore.file || "Teeest"}
      </h1>
      <input
        type="text"
        onClick={(event) => store.previewStore.setFile(event)}
      />
    </>
  );
});

export default App;
