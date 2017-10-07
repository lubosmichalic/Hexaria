import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class HexBoard extends Component {
  constructor() {
    super();
    this.state = { Message: 'Hello World' };
  }

  render() {
    return (<h1>{this.state.Message}</h1>);
  }
}

export default HexBoard;
