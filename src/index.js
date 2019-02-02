import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import List from "./components/list/List";
import "./index.css";
import NotFound from "./components/notfound/NotFound";
import Detail from "./components/detail/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/currency/:id" component={Detail} exact />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
