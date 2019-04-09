import React from 'react';
import ReactDOM from 'react-dom';

const title = 'management';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();