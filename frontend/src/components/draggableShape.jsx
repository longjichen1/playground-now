import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, RegularPolygon } from "react-konva";

class DraggableShape extends Component {
    state = {
        isDragging: false,
        radius: 70,
        x: 70,
        y: 70,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    };

    render() {
        return (
            <React.Fragment>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <RegularPolygon
                            x={this.state.x}
                            y={this.state.y}
                            sides={3}
                            radius={this.state.radius}
                            draggable
                            fill={"#fe657d"}
                            onDragStart={() => {
                                this.setState({
                                    isDragging: true,
                                });
                            }}
                            onDragEnd={(e) => {
                                this.setState({
                                    isDragging: false,
                                    x: e.target.x(),
                                    y: e.target.y(),
                                });
                            }}
                            dragBoundFunc={(pos) => {
                                return {
                                    x: Math.min(
                                        Math.max(pos.x, 65),
                                        this.state.windowWidth -
                                            this.state.radius +
                                            10
                                    ),
                                    y: Math.min(
                                        Math.max(pos.y, 70),
                                        this.state.windowHeight -
                                            this.state.radius / 2
                                    ),
                                };
                            }}
                        />
                    </Layer>
                </Stage>
            </React.Fragment>
        );
    }
}

export default DraggableShape;
