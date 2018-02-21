import React from 'react';
import { beerStyles } from '../../utilities';

const styles = {
  beerCard: {
    height: "180px",
    marginTop: "10px"
  }
};

export const BeerCard = (props) => {
  let { currentBeer } = props

  if (currentBeer) {
    return (
      <div style={ styles.beerCard }>
        <h2>Beer On Tap</h2>
        <h3>{ currentBeer.name }</h3>
        <h4>{ beerStyles[currentBeer.style] }</h4>
        <h4>{ currentBeer.brewer}</h4>
      </div>
    );
  }
  else return (
    <div style={ styles.beerCard }>
      <h4>No beer on tap.</h4>
    </div>
  )
};
