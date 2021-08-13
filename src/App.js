import { Redirect, Route, Switch } from "react-router-dom";

import List from "./pages/List";
import Profile from "./pages/Profile";
import React from "react";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/profile" exact component={Profile} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
