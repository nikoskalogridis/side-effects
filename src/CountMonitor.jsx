import React, { Component } from "react";

class CountMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.subscribe(count => {
      this.setState({ counter: count });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return <div>Count is {this.state.counter}</div>;
  }
}

export default CountMonitor;
