import React, { Component } from 'react'
import * as firebase from 'firebase'
import logo from './logo.png'
import './App.css'

const config = {
    apiKey: "AIzaSyClXRieTtf4Bc5M-JwzsCfWjDb5_yD9YSw",
    authDomain: "mostromedia2013.firebaseapp.com",
    databaseURL: "https://mostromedia2013.firebaseio.com",
    projectId: "mostromedia2013",
    storageBucket: "mostromedia2013.appspot.com",
    messagingSenderId: "764454126810"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mostro Media</h2>
        </div>
        <p className="App-intro">
          Mostro is updating. Thanks for your patiente.
        </p>
      </div>
    );
  }
}

export default App;
