import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import HexTileList from './HexTileList';

class HexBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (<HexTileList data={this.state.data} />);
  }
}

export default HexBoard;
