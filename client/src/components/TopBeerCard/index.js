import React from 'react';
import { formatDollars } from '../../utilities';

export const TopBeerCard = (props) => {
  let { beer } = props;

  return (
    <div style={ styles.beerCard }>
      <h2>Top Selling Beer</h2>
      <h3>{ beer.name }</h3>
      <p>Style: { beer.style }</p>
      <h4>Brewer: { beer.brewer}</h4>
      <h4>Total Keg Cost: $ { formatDollars(beer.kegPrice) }</h4>
    </div>
  );
}

const styles = {
  beerCard: {
    // height: "150px",
    marginBottom: "10px",
    padding: "10px"
  }
}
