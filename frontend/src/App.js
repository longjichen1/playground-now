import React, { Component } from "react";
import "./App.css";

import background from "./assets/background.jpeg";
import Home from "./Home";
import { Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Nav from "./Nav";
const firebaseConfig = {
    apiKey: "AIzaSyBsOonoZdkQJH1bT1J5h-n4WJscXQwfbQY",
    authDomain: "sandbox-39bee.firebaseapp.com",
    projectId: "sandbox-39bee",
    appId: "1:919804796580:web:0908b97fb77146bf0b5031",
};
initializeApp(firebaseConfig);

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={Signup} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
        </div>
    );
}

export default App;
