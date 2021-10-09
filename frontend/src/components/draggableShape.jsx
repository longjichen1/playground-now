import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, RegularPolygon } from "react-konva";

class DraggableShape extends Component {
    state = {
        isDragging: false,
        radius: 70,
        triangleX: 70,
        triangleY: 70,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
    };

    render() {
        return (
            <React.Fragment>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <RegularPolygon
                            x={this.state.windowWidth / 2}
                            y={this.state.windowHeight / 2}
                            sides={3}
                            radius={this.state.radius}
                            stroke={"black"}
                        />
                        <RegularPolygon
                            x={this.state.triangleX}
                            y={this.state.triangleX}
                            sides={3}
                            radius={this.state.radius}
                            draggable
                            fill={"#fe657d"}
                            stroke={"black"}
                            strokeWidth={this.state.isDragging ? 4 : 0}
                            onMouseDown={() => {
                                this.setState({ isDragging: true });
                            }}
                            onMouseUp={() => {
                                this.setState({ isDragging: false });
                            }}
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
