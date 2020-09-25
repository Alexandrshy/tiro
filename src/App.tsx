import { observer } from "mobx-react";
import React, { useEffect } from "react";

import { Content } from "@components/content";
import { Header } from "@components/header";
import { useStore } from "@stores/context";

const App: React.FC = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.previewCanvas.setCanvas("Dribbble");
  });

  return (
    <>
      <Header />
      <Content />
    </>
  );
});

export default App;
