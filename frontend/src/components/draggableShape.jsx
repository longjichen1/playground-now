import React, { Component } from "react";
import { render } from "react-dom";
import { Stage, Layer, RegularPolygon } from "react-konva";

class DraggableShape extends Component {
    state = {
        isDragging: false,
        radius: 70,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        targetX: (2 * window.innerWidth) / 3,
        targetY: window.innerHeight / 2,
        targetReached: false,
    };

    render() {
        return (
            <React.Fragment>
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <RegularPolygon
                            x={this.state.targetX}
                            y={this.state.targetY}
                            sides={3}
                            radius={this.state.radius}
                            stroke={"black"}
                            strokeWidth={8}
                            lineJoin={"round"}
                        />
                        <RegularPolygon
                            x={(1 * this.state.windowWidth) / 3}
                            y={this.state.windowHeight / 2}
                            sides={3}
                            radius={this.state.radius}
                            draggable
                            fill={"#fe657d"}
                            stroke={"black"}
                            strokeWidth={this.state.isDragging ? 6 : 3}
                            lineJoin={"round"}
                            onMouseDown={() => {
                                this.setState({ isDragging: true });
                            }}
                            onMouseUp={() => {
                                this.setState({ isDragging: false });
                                if (this.state.targetReached) {
                                }
                            }}
                            onDragStart={() => {
                                this.setState({
                                    isDragging: true,
                                });
                            }}
                            onDragEnd={(e) => {
                                let finalX = e.target.x();
                                let finalY = e.target.y();
                                let targetReached = this.state.targetReached;
                                if (
                                    Math.abs(e.target.x() - this.state.targetX) < 100 &&
                                    Math.abs(e.target.y() - this.state.targetY) < 100
                                ) {
                                    finalX = this.state.targetX;
                                    finalY = this.state.targetY;
                                    targetReached = true;
                                    e.target.absolutePosition({ x: finalX, y: finalY });
                                }
                                this.setState({
                                    isDragging: false,
                                    x: finalX,
                                    y: finalY,
                                    targetReached,
                                });
                            }}
                            dragBoundFunc={(pos) => {
                                return {
                                    x: Math.min(Math.max(pos.x, 65), this.state.windowWidth - this.state.radius + 10),
                                    y: Math.min(Math.max(pos.y, 70), this.state.windowHeight - this.state.radius / 2),
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
