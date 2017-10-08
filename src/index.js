import React from 'react';
import ReactDOM from 'react-dom';

import HexBoard from './HexBoard';

ReactDOM.render(
  <HexBoard
    url='http://localhost:3001/hexboads'
    pollInterval = {2000}/>,
  document.getElementById('root')
);
