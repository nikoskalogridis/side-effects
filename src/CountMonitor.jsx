import React, { Component } from "react";

class CountMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  subscribe = () => {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.unsubscribe = this.props.subscribe(count => {
      this.setState({ counter: count });
    });
  };

  componentDidMount() {
    this.subscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.subscribe !== this.props.subscribe) {
      this.subscribe();
    }
  }

  render() {
    return <div>Count is {this.state.counter}</div>;
  }
}

export default CountMonitor;
