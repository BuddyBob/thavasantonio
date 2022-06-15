import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Projects from './components/Pages/Projects/Projects.js';
import Links from './components/Pages/Links/Links.js'
import About from './components/Pages/About/About.js'

import VM from './components/Pages/Posts/Virtual_Machine/VM.js'
import LS from './components/Pages/Posts/List_Comprehension/LC.js'
import VSC_EXT from './components/Pages/Posts/VSC_Extensions/VSC_EXT.js'
class App extends Component {
  render() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/projects" element={<Projects/>}/>
            <Route exact path="/links" element={<Links/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/virtual-machine" element={<VM/>}/>
            <Route exact path="/list-comprehension-python" element={<LS/>}/>
            <Route exact path="/vscode-extensions" element={<VSC_EXT/>}/>
        </Routes>
    );
  }
}
export default App;