import React, { Component } from "react";
import { Ring } from "react-konva";

class RingP extends Component {
    state = {
        isDragging: false,
        outerRadius: 70,
        innerRadius: 40,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        x: this.props.x,
        y: this.props.y,
        targetX: this.props.targetX,
        targetY: this.props.targetY,
        targetReached: false,
    };

    render() {
        return (
            <React.Fragment>
                <Ring
                    x={this.state.targetX}
                    y={this.state.targetY}
                    innerRadius={this.state.innerRadius}
                    outerRadius={this.state.outerRadius}
                    stroke={"black"}
                    strokeWidth={8}
                    lineJoin={"round"}
                />
                <Ring
                    x={this.state.x}
                    y={this.state.y}
                    innerRadius={this.state.innerRadius}
                    outerRadius={this.state.outerRadius}
                    draggable={!this.state.targetReached}
                    fill={"#fe657d"}
                    stroke={"black"}
                    strokeWidth={this.state.isDragging ? 6 : 3}
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
                />
            </React.Fragment>
        );
    }
}

export default RingP;
