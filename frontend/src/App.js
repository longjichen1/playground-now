import React, { Component } from "react";
import "./App.css";
import DraggableShape from "./components/draggableShape";
import background from "./assets/background.jpeg";
import Matter from './Matter';
import Home from './Home';
import {Route, Link} from "react-router-dom";

function App() {
    return(
        <div className="App">
            <Route exact path="/" component = {Home}/>
            <Route exact path="/matter" component = {Matter}/>
        </div>
    );
}

export default App;