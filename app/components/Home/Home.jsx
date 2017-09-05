// Home Page (Landing)
import './home.scss';

import React from 'react';
import Footer from '../Footer/Footer';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="intro-header">
          <h2 className="bold">Hi, I'm Wesley</h2>
          <p>
            Maker | Product Designer
          </p>
        </div>
        <div className="intro-content">
          <p>
            I worked with <a href="https://onemonth.com/" className="whaat-tooltip">OneMonth</a>, and then built <a href="https://medium.com/@UseShout/reflecting-on-our-efforts-5e9657c145eb#.gakku4drc" className="whaat-tooltip">Shout</a> from the ground up.
          </p>
          <p>
            Currently, I'm freelancing and learning Unity3D in order to build groundbreaking experiences in <a href="https://www.youtube.com/watch?v=leg2gS6ShZw" className="whaat-tooltip">VR</a>.
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
