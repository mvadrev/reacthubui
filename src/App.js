import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/Home";

import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Connectonet from "./components/Connectonet";
import Default from "./components/Default";
import Connected from "./components/Connected";
import Login from "./components/Login";

function App() {
  let history = useHistory();

  // return <div>{wifistatus ? <Home /> : <Connected />}</div>;
  return (
    <div>
      <Switch>
        <Route path="/connected" component={Connected} />
        <Route path="/connect" component={Connectonet} />
        <Route path="/notconn" component={Home} />
        <Route path="/sess" component={Default} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
