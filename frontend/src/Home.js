import React, { useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import { findByPlaceholderText } from "@testing-library/react";
import * as fp from "fingerpose";
import { pinchGesture } from "./pinch";
import "./App.css";
import Canvas from "./components/canvas";
import background from "./assets/background.jpeg";

function Home() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    let min = 100000;
    let max = -324343;

    const webcamRef = useRef(null);

    const runHandPose = async () => {
        const net = await handpose.load();
        console.log("Handpose model loaded.");

        setInterval(() => {
            detect(net);
        }, 100);
    };

    const detect = async (net) => {
        if (
            typeof webcamRef.current !== "undefined" &&
            webcamRef.current !== null &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videowidth;
            const videoHeight = webcamRef.current.video.height.videoHeight;

            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;

            const hand = await net.estimateHands(video);
            if (hand.length == 1) {
                if ((hand[0].boundingBox.bottomRight[0] + hand[0].boundingBox.topLeft[0]) / 2 < min) {
                    min = (hand[0].boundingBox.bottomRight[0] + hand[0].boundingBox.topLeft[0]) / 2;
                }
                if ((hand[0].boundingBox.bottomRight[0] + hand[0].boundingBox.topLeft[0]) / 2 > max) {
                    max = (hand[0].boundingBox.bottomRight[0] + hand[0].boundingBox.topLeft[0]) / 2;
                }
                console.log((hand[0].boundingBox.bottomRight[0] + hand[0].boundingBox.topLeft[0]) / 2);
                console.log(`MIN: ${min}`);
                console.log(`MAX: ${max}`);
            }
            if (hand.length > 0) {
                const GE = new fp.GestureEstimator([pinchGesture]);

                const gesture = await GE.estimate(hand[0].landmarks, 8);

                try {
                    console.log(gesture.gestures[0].name);
                } catch (TypeError) {
                    console.log("no pinch");
                }
            }
        }
    };

    runHandPose();

    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: document.body.scrollHeight * 1.35,
            }}
        >
            <Canvas />
            <Webcam
                ref={webcamRef}
                style={{
                    position: "fixed",
                    bottom: 0,
                    right: 0,
                    zindex: 9,
                    width: 240,
                    height: 180,
                }}
            />
        </div>
    );
}
export default Home;
