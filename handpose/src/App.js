//import logo from './logo.svg';
import React, {useRef, useState} from 'react';
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam"
import './App.css';
import { findByPlaceholderText } from '@testing-library/react';
import * as fp from "fingerpose"
import {pinchGesture} from "./pinch"

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandPose = async () =>{
    const net = await handpose.load()
    console.log('Handpose model loaded.')

    setInterval(() =>{
      detect(net)
    }, 100)
  };

  const detect = async (net) =>{
    if(typeof webcamRef.current !=="undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
      ){
        const video = webcamRef.current.video;
        const videoWidth = webcamRef.current.video.videowidth;
        const videoHeight = webcamRef.current.video.height.videoHeight;

        webcamRef.current.video.width = videoWidth;
        webcamRef.current.video.height = videoHeight;

        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        
        const hand = await net.estimateHands(video);
        if(hand.length == 1){
          console.log(hand[0].boundingBox.topLeft); 
        }
        if(hand.length > 0){
          const GE = new fp.GestureEstimator([
              pinchGesture
            ])

          const gesture = await GE.estimate(hand[0].landmarks, 8);
          
          try{
            console.log(gesture.gestures[0].name);
          }catch(TypeError){
            console.log('no pinch')
          }
        }
      }
  };

  runHandPose();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam ref={webcamRef}
        style= {{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign:"center",
          zindex:9,
          width:640, 
          height: 480
        }}></Webcam>
        <canvas ref={canvasRef}
        style={{          
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left:0,
          right:0,
          textAlign:"center",
          zindex:9,
          width:640, 
          height: 480}}></canvas>
      </header>
    </div>
  );
}

export default App;
