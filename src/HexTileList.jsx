import React, { Component } from 'react';
import HexTile from './HexTile';
class HexTileList extends Component{
  render() {
    let tileNodes = this.props.data.map(hexTile =>{
      return (
        <HexTile
          key={hexTile['_id']}
          color={hexTile.color}>
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
