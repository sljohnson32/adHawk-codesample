import React from 'react';
import { beerStyles } from '../../utilities';

export const BeerCard = (props) => {
  let { currentBeer } = props

  if (currentBeer) {
    return (
      <div style={ styles.beerCard }>
        <h2>Beer On Top</h2>
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
}

const styles = {
  beerCard: {
    height: "150px",
    marginTop: "10px"
  }
}
