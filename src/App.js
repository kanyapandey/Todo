import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
