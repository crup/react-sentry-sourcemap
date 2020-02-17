import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crashApp: null,
    };
  }

  render() {
    const { crashApp } = this.state;
    return (
      <>
        <HelloWorld title="Hello from React webpack" />
        <button type="button" onClick={() => crashApp.toString()}>
          Break the world
        </button>
      </>
    );
  }
}

export default hot(App);
