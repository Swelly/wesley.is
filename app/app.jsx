// App JS entry point. Router Run here.
require.context(
  "./assets",
  true,
  /.*/
);

import './favicon.ico';
import './index.html';
import './scss/normalize.scss';
import './scss/master.scss';


import React from 'react';
import Router from 'react-router';
import routes from './routes';

// Bind to body
const mountNode = document.body;

Router.run(routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, mountNode);
});
