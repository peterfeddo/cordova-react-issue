import React from "react";
import TestMeComponent from "./TestMe";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image: "" };
    console.log("hello peter today");
  }

  takepic = ev => {
    if (window.cordova) {
      /*navigator.camera.getPicture(image => {
        this.setState({
          image
        });
        console.log(this.state);
      }, console.log);
    } else console.log("please run the cordova project");*/
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      });
    }
  };

  onSuccess(imageData) {
    //var image = document.getElementById('myImage');
    //this.state = "data:image/jpeg;base64," + imageData;
    this.setState({
      imageData
    });
  }

  onFail(message) {
    alert("Failed because: " + message);
  }

  render() {
    return (
      <div>
        <h2>Boisset Proof Of Concept ver 0.1</h2>
        <TestMeComponent />
        <img src="data:image/jpeg;base64,{this.state.image}" alt="picture" />
        <button onClick={this.takepic}>Take picture</button>
        <button onClick={this.watchAcceleration}>Watch Acceleration</button>
      </div>
    );
  }

  watchAcceleration = () => {
    /*watchID = navigator.accelerometer.watchAcceleration(
      this.accelerometerSuccess(acceleration),
      this.accelerometerError(),
      this.accelerometerOptions
    );*/

    setInterval(function() {
      navigator.accelerometer.getCurrentAcceleration(
        acceleration => {
          console.log(acceleration.x, acceleration.y, acceleration.z);
        },
        function() {
          console.log("boo");
        }
      );
    }, 300);
  };

  accelerometerOptions = {
    frequency: 3000
  };

  accelerometerSuccess = () => {
    console.log(
      "Acceleration X: " +
        acceleration.x +
        "\n" +
        "Acceleration Y: " +
        acceleration.y +
        "\n" +
        "Acceleration Z: " +
        acceleration.z +
        "\n" +
        "Timestamp: " +
        acceleration.timestamp +
        "\n"
    );

    setTimeout(function() {}, 10000);
  };

  accelerometerError() {
    alert("onError!");
  }
}

export default App;
