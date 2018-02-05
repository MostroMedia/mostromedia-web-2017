import React, { Component } from 'react'
import * as firebase from 'firebase'
import './App.css'

import Home from './Home/Home.js'
import Work from './Work/Work.js'
import Team from './Team/Team.js'
import Contact from './Contact/Contact.js'
import Footer from './Footer/Footer.js'
import Particles from './Particles/Particles.js'
//import Snow from './Snow/Snow.js'
import Menu from './Menu/Menu.js'

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
        <Home />
        <Work />
        <Team />
        <Contact />
        <Footer />
        <Particles />
        <Menu />
      </div>
    );
  }
}

export default App;
