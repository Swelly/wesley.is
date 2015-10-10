// App Structure and Navigation

import React from 'react';
import ReactRouter, {RouteHandler, Link} from 'react-router';

import NavigationStore from '../../stores/NavigationStore';
import Navbar from '../Navbar/Navbar';

function getState() {
  return {
    pages: NavigationStore.getAll()
  };
}

class App extends React.Component {

  state = getState();

  render() {
    return (
      <section>
        <Navbar pages={this.state.pages} />
        <RouteHandler key={this.context.router.getCurrentPath()} />
      </section>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default App
