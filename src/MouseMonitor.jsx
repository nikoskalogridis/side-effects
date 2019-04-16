import React, { Component } from "react";

class EventMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    document.addEventListener("mousemove", this.onMouseMove);
  }

  onMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  render() {
    const { x, y } = this.state;
    return <span>{`Mouse position: ${x},${y}`}</span>;
  }
}

export default EventMonitor;
