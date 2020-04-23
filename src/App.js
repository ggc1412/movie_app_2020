import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Navigation from "./Components/Navigation";

import "./App.css";
import About from "./Routes/About";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </HashRouter>
  );
}

export default App;
