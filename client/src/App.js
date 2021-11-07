import { useState, useContext } from "react";
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
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
        <Route path="/info">
          <Info />
        </Route>
        <Route path="/post/:postId">{user ? <Single /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
