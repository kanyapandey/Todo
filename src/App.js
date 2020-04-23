import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components Imports
import Login from "./Components/Login Page";


function App() {
  return (
    <Router>
      <div className="app_wrapper">
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
