import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Assignments from "./Assignments/Assignments";
import Boids from "./Boids/Boids";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/boids">
            <Boids />
          </Route>
          <Route path="/">
            <Assignments />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
