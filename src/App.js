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
  constructor(props) {
    super(props);
    this.state = {
      text: 'Welcome to React',
      linkClicked: false,
    };
  }

  onClick() {
    this.setState({
      text: 'Thanks for clicking! :D',
      linkClicked: true,
    });
  }

  render() {
    const link = (
      <a href="#" onClick={this.onClick.bind(this)}>click me</a>
    );

    return (
      <div style={styles.app}>
        <div style={styles.appHeader}>
          <img src={logo} style={styles.appLogo} alt="logo" />
          <h2>{this.state.text}</h2>
        </div>
        <p style={styles.appIntro}>
          {this.props.helpMessage}
        </p>
        {(!this.state.linkClicked) ? link : null}
      </div>
    );
  }
}

export default App;
