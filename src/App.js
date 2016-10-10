import React, { Component } from 'react';
import logo from './logo.svg';

const styles = {
  app: {
    textAlign: 'center',
  },
  appLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: 80,
  },
  appHeader: {
    backgroundColor: '#222',
    height: 150,
    padding: 20,
    color: 'white',
  },
  appIntro: {
    fontSize: 'large',
  },
}

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div style={styles.appHeader}>
          <img src={logo} style={styles.appLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p style={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
