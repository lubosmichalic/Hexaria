import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import HexTileList from './HexTileList';


class HexBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadHexTilesFromServer = this.loadHexTilesFromServer.bind(this);
  }

  loadHexTilesFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data});
      })
  }

  componentDidMount() {
    this.loadHexTilesFromServer();
    setInterval(this.loadHexTilesFromServer, this.props.pollInterval);
  }
  render() {
    return (
      <div>
        <h2>Hex Tiles:</h2>
        <HexTileList data={this.state.data} />;
      </div>
    )
  }
}

export default HexBoard;
