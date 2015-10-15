// Router Config. Include components and App structure here

import React from 'react';
import Router, {Route, RouteHandler, DefaultRoute} from 'react-router';

// Components to navigate to
import App from './components/App/App.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Work from './components/Work/Work.jsx';

// App describes the layout of the whole site
// Home is landing page
export default (
  <Route name="app" path="/" handler={App}>
    <Route name="about" path="/cool" handler={About} />
    <Route name="work" path="/making" handler={Work} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);
