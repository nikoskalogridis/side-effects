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

  // componentWillUnmount() {
  //   this.unsubscribe();
  // }

  // subscribe = () => {
  //   if (this.unsubscribe) {
  //     this.unsubscribe();
  //   }
  //   this.unsubscribe = this.props.subscribe(this.countCallback);
  // };

  // componentDidMount() {
  //   this.subscribe();
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.subscribe !== this.props.subscribe) {
  //     this.subscribe();
  //   }
  // }
}

export default CountMonitor;
