// App JS entry point. Router Run here.
import './favicon.ico';
import './index.html';
import './scss/normalize.scss';
import './scss/master.scss';


import React from 'react';
import Router from 'react-router';
import routes from './routes';


// Grab #app
const mountNode = document.getElementById('app');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, mountNode);
});
