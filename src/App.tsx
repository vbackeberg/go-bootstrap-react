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
        <main className="mt-4">
          <Switch>
            <Route path="/boids">
              <Boids />
            </Route>
            <Route path="/">
              <Assignments />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
