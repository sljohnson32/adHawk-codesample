import React, { Component } from 'react';
import TapCard from '../../containers/TapCard-container'
import './CurrentTaps-styles.css';

class CurrentTaps extends Component {

  render() {

    let currentTaps = this.props.tapsData.map(tap => {
      return <TapCard {...tap} key={ tap.id } />;
    })

    return (
      <div className="currentTaps-container">
        { currentTaps }
      </div>
    );
  };
};

export default CurrentTaps;
