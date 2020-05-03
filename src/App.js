import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import Tab1 from './Components/Tab1'
import Tab2 from './Components/Tab2'

function App() {
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Switch>
          <Route path="/" exact component={Tab1} />
          <Route path="/tab" component={Tab2} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
