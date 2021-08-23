import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from './Home';
import VM from './components/Pages/Virtual-Machine/VM'

class App extends Component {
  render() {
    return (
      <div className="app" basename='/index.html'>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/virtual-machine" component={VM}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;