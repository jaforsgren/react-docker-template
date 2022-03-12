import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <a href="https://github.com/nytimes/react-tracking">react-docker template</a>{" "}
            example
          </h2>
        </header>
        <img
          width="40%"
          alt="react-tracking logo"
          src="https://cdn-images-1.medium.com/max/1600/1*DKS5pYfsAz-H45myvnWWVw.gif"
        />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
