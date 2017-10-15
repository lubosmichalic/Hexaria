import React from 'react';
import ReactDOM from 'react-dom';

import HexBoard from './HexBoard';

ReactDOM.render(
  <HexBoard
    url='http://localhost:3001/api/hexboards'
    pollInterval = {10000}/>,
  document.getElementById('root')
);
