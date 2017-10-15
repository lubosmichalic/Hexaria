import React, { Component } from 'react';

class HexTileForm extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type='text'
          placeholder='Terrain Type ...'
          value={ this.state.terrain }
          onChange={ this.handleTerrainChange }
        />
        <input type='text'
          placeholder='Color ...'
          value={ this.state.color }
          onChange={ this.handleColorChange }
        />
        <input type='text'
          placeholder='Tile Name (Optional) ...'
          value= { this.state.name }
          onChange={ this.handleNameChange }
        />
        <input type='text'
          placeholder='Notes (Optional) ...'
          value={ this.state.notes }
          onChange={ this.handleNotesChange}
        />
        <input
          type='submit'
          value='Post'
        />
      </form>
    );
  }
}

export default HexTileForm
