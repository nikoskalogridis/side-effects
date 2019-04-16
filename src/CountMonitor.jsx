import React, { Component } from "react";

class CountMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    props.subscribe(count => {
      this.setState({ counter: count });
    });
  }

  render() {
    return <div>Count is {this.state.counter}</div>;
  }
}

export default CountMonitor;
