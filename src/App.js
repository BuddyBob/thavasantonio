import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import VM from './components/Pages/Virtual-Machine/VM'

class App extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/virtual-machine" element={<VM/>}/>
        </Routes>
    );
  }
}
export default App;