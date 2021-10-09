import React, { Component } from "react";
import "./App.css";
import DraggableShape from "./components/draggableShape";
import background from "./assets/background.jpeg";

const Home =()=> {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: document.body.scrollHeight * 1.35,
            }}
        >
            <DraggableShape />
        </div>
    );
}

export default Home;
