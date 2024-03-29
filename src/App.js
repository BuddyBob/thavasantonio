import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';

import Projects from './components/Pages/Projects/Projects.js';
import Links from './components/Pages/Links/Links.js'
import About from './components/Pages/About/About.js'

import VM from './components/Pages/Posts/Virtual_Machine/VM.js'
import LS from './components/Pages/Posts/List_Comprehension/LC.js'
import VSCEXT from './components/Pages/Posts/VSC_Extensions/VSCEXT.js'

import Fundl from './components/Pages/Posts/Fundl_Dir/Fundl.js'
import QT from './components/Pages/Posts/QuickType_Dir/QT.js'
import MB from './components/Pages/Posts/MathleticsBot_Dir/MB.js'
import VB from './components/Pages/Posts/VocabBot_Dir/VB.js'


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
            <Route exact path="/vscode-extensions" element={<VSCEXT/>}/>

            <Route exact path="/projects/fundl" element={<Fundl/>}/>
            <Route exact path="/projects/quick-type" element={<QT/>}/>
            <Route exact path="/projects/mathletics-bot" element={<MB/>}/>
            <Route exact path="/projects/vocab-bot" element={<VB/>}/>
        </Routes>
    );
  }
}
export default App;