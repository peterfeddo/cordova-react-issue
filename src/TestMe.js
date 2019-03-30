// CameraComponent.js
import React, { Component } from "react";

class TestMeComponent extends Component {
  triggerConsoleLog() {
    //navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
    if (window.cordova) {
      alert("yay it's cordova");
      console.log("hello cordova");
      console.log(navigator);
    } else {
      alert("it's not digorno");
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.triggerConsoleLog}>Trigger Console Log</button>
      </div>
    );
  }

  componentDidMount() {}
}

export default TestMeComponent;
