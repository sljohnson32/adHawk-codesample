import React from 'react';
import { beerStyles } from '../../utilities';

export const BeerCard = (props) => {
  let { currentBeer } = props

  if (currentBeer) {
    return (
      <div style={ styles.beerCard }>
        <h4>{ currentBeer.name }</h4>
        <p>{ beerStyles[currentBeer.style] }</p>
        <h4>{ currentBeer.brewer}</h4>
      </div>
    );
  }
  else return (
    <div style={ styles.beerCard }>
      <p>No beer on tap.</p>
    </div>
  )
}

const styles = {
  beerCard: {
    height: "150px"
  }
}
