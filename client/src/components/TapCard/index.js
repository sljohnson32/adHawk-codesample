import React, { Component } from 'react';
import PopUp from '../PopUp';

class TapCard extends Component {

  render() {
    let { id, name } = this.props;

    return (
      <div className="tap-card">
        <section className='tap-header'>
          <h3>{name}</h3>
          <PopUp />
        </section>
        <section className="tap-info">
          <h4>Current Beer</h4>
          <p>Beer Type</p>
          <h4>Brewer</h4>
        </section>
      </div>
    );
  }
}

export default TapCard;
