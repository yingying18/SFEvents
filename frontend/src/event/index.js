import React from 'react';
import ReactDOM from 'react-dom';

const title = 'event';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();