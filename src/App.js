import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import VM from './components/Pages/Virtual_Machine/VM'
import LS from './components/Pages/List_Comprehension/LC.js'
import VSC_EXT from './components/Pages/VSC_Extensions/VSC_EXT.js'

class App extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/virtual-machine" element={<VM/>}/>
            <Route exact path="/list-comprehension-python" element={<LS/>}/>
            <Route exact path="/vscode-extensions" element={<VSC_EXT/>}/>
        </Routes>
    );
  }
}
export default App;