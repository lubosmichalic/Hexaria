import React, { Component } from 'react';

class HexTile extends Component {
  render(){
    return(<div className="HexTile">{this.props.desc}</div>);
  }
}


export default HexTile;
