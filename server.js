//server.js
'use strict'
require('dotenv').config();

// first we import our dependencies...
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// db schemas
const HexBoard = require('./model/hexBoard');
const HexTile = require('./model/hexTile');
// and create our instances
const app = express();
const router = express.Router();

// set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.API_PORT || 3001;

// dbo config
const mongoDB = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVERURI}`;
mongoose.connect(mongoDB, { useMongoClient: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* To prevent errors from Cross Origin Resource Sharing,
  we will set our headers to allow CORS with middleware like so:
*/
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

router.route('/hexboards')
  .get((req, res) => {
    HexBoard.find((err, hexboards) => {
      if (err)
        res.send(err);
      res.json(hexboards);
    });
  })

  .post((req, res) => {
    const hexboard = new HexBoard();
    hexboard.area_name = req.body.area_name;
    hexboard.desc = req.body.desc;

    hexboard.save((err) => {
      if (err)
        res.send(err);
      res.json({ message: 'Hexboard succesfully created' });
    });
  });

router.route('/hextiles')
  .get((req,res) => {
    HexTile.find((err, hextiles) => {
      if (err)
        res.send(err);
      res.json(hextiles);
    });
  })

  .post((req, res) => {
    const hextile = new HexTile();
    hextile.color = req.body.color;
    hextile.name = req.body.name;
    hextile.terrain = req.body.terrain;
    hextile.notes = req.body.notes;
    hextile.save((err) => {
      if (err)
        res.send(err);
      res.json({ message: 'Tile successfully added' });
    });
  })
//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
