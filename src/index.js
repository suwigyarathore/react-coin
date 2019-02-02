import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import List from "./components/list/List";
import "./index.css";
import NotFound from "./components/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={List} exact />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
