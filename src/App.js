import React, { Component } from 'react';
import Introduce from './Introduce';
import AboutMe from './AboutMe';
import Education from './Education';
import './App.scss';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Introduce className="Introduce"></Introduce>
        <AboutMe className="AboutMe"></AboutMe>
        <Education className="AboutMe"></Education>
      </main>
    );
  }
}

export default App;
