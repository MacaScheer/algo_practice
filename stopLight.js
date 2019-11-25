import React from "react";
class StopLight extends React.Component {
  constructor() {
    this.sleepFunction = this.sleepFunction.bind(this);
    this.switch = this.switch.bind(this);
    this.state = {
      on: true,
      modes: [true, false, false]
    };
  }
  switch() {
    this.sleepFunction();
    //   let currentMode = modes[0]
    while (this.state.on) {
      modes.rotate();
    }
  }
  sleepFunction = function() {
    return new Promise(res => setTimeout(res, 300));
  };
  componentDidMount() {
    this.switch();
  }
  render() {
    //   let shownDiv = ()
    return (
      <div className="stoplight-box">
        {this.state.modes[0] ? (
          <div className="redOn">RED</div>
        ) : (
          <div className="redOff"></div>
        )}
        {this.state.modes[1] ? (
          <div className="yellowOn">RED</div>
        ) : (
          <div className="yellowOff"></div>
        )}

        {this.state.modes[2] ? (
          <div className="greenOn">RED</div>
        ) : (
          <div className="greenOff"></div>
        )}
      </div>
    );
  }
}

export default StopLight;
