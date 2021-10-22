import { useState } from "react";
import { NavBar } from "./components/navBar/NavBar";
import { Home } from "./pages/home/Home";
import "./App.css";
import { Settings } from "./pages/settings/Settings";
import { Single } from "./pages/single/Single";
import { Write } from "./pages/write/Write";
import { SinglePost } from "./components/singlePost/SinglePost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
