import * as React from "react";
import { render } from "react-dom";
import CountMonitor from "./CountMonitor";

import "./styles.css";

function subscribe(callBack) {
  let counter = 0;
  const interval = setInterval(function() {
    callBack(counter++);
  }, 0);
  return () => {
    clearInterval(interval);
  };
}

class App extends React.Component {
  state = {
    enabled: false
  };

  render() {
    const { enabled } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.setState({ enabled: !enabled })}>
          {enabled ? "Stop" : "Start"} Counter
        </button>
        <div>{enabled && <CountMonitor subscribe={subscribe} />}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
