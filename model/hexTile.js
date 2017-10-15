'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HexTileSchema = new Schema({
  color: String,
  name: String,
  terrain: String,
  notes: String
});

module.exports = mongoose.model('HexTile', HexTileSchema);
