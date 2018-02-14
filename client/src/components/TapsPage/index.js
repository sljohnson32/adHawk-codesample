import React, { Component } from 'react';
import CurrentTaps from '../CurrentTaps';

class TapsPage extends Component {

  render() {
    return (
      <div className="tapPage-container">
        <CurrentTaps />
      </div>
    );
  }
}

export default TapsPage;
