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

  setPageHeight() {
    let windowHeight = window.innerHeight;
    let page = document.getElementsByClassName('page-wrapper')[0];
    console.log(page);
    page.setAttribute('style','height:'+windowHeight+'px');
  }

  componentDidMount() {
    this.setPageHeight()
  }

  render() {
    let currentPath = this.context.router.getCurrentPath();

    return (
      <section className="page-wrapper">
        <Navbar pages={this.state.pages} />
        <RouteHandler key={currentPath} />
      </section>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.func.isRequired
};

console.log('%cAhoy there surfer of the internet. If you liked my site let\'s talk! @WesMagness', 'color: #2a2a2c; font-size: 16px; font-weight: italic')

export default App
