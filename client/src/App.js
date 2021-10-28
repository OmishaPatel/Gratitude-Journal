import { useState } from "react";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./pages/home/Home";
import "./App.css";
import { Settings } from "./pages/settings/Settings";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";

import { SinglePost } from "./components/singlePost/SinglePost";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Info } from "./pages/info/Info";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/post/:postId">{user ? <Single /> : <Register />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
