import './logo.scss';

import React from 'react';

class Logo extends React.Component {
  render() {
    let strokeStyle = {
      fill: "none",
      stroke: "#3E454C",
      strokeWidth: "28px",
      strokeLinecap: "round"
    }

    return (
      <svg viewBox="-10 0 400 455"
        width="380px" height="440px">
        <g className="logo-animate">
          <line className="dash" style={strokeStyle} x1="14" y1="14" x2="14" y2="429"/>
          <line className="dash" style={strokeStyle} x1="361" y1="14" x2="361" y2="429"/>
          <line className="dash second" style={strokeStyle} x1="15" y1="429" x2="187" y2="95"/>
          <line className="dash second" style={strokeStyle} x1="360" y1="429" x2="187" y2="95"/>
          <line className="dash third" style={strokeStyle} x1="101" y1="263" x2="187" y2="429"/>
          <line className="dash third" style={strokeStyle} x1="274" y1="263" x2="187" y2="429"/>
        </g>
      </svg>
    )
  }
}

export default Logo;
