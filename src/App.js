import React from "react";
import "./index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Models from "./components/Models";
import Solar from "./components/Solar";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:id">
          <Sidebar />
          <Models />
          <Solar />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
