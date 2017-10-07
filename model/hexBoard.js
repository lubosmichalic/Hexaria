'use strict'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HexBoardScema = new Schema({
  area_name: String,
  desc: String,
});

module.exports = mongoose.model('HexBoard', HexBoardScema);
