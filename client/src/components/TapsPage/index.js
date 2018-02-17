import React, { Component } from 'react';
import CurrentTaps from '../../containers/CurrentTaps-container';

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
