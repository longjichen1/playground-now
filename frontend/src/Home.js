import React, { Component } from "react";
import "./App.css";
import Canvas from "./components/canvas";
import background from "./assets/background.jpeg";

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: document.body.scrollHeight * 1.35,
                }}
            >
                <Canvas />
            </div>
        );
    }
}
export default Home;
