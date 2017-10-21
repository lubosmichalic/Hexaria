import React, { Component } from 'react';
import HexTile from './HexTile';
class HexTileList extends Component{
  constructor(props) {
    super(props);

  }
  render() {
    let tileNodes = this.props.data.map(hexTile =>{
      return (
        <HexTile
          key={hexTile['_id']}
          desc={hexTile.desc}>
          {hexTile.color}
        </HexTile>
      );
    });
    return (
      <div className="HexTileList">
        { tileNodes }
      </div>
    );
  }
}

export default HexTileList;
