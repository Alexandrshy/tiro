import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { About } from "@components/about";
import { Content } from "@components/content";
import { Header } from "@components/header";
import { StaticPage } from "@components/staticPage";
import { useStore } from "@stores/context";

const App: React.FC = observer(() => {
  const store = useStore();

  useEffect(() => {
    store.previewCanvas.setCanvas("Dribbble");
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Content />
        </Route>
        <Route path="/about">
          <StaticPage>
            <About />
          </StaticPage>
        </Route>
      </Switch>
    </Router>
  );
});

export default App;
