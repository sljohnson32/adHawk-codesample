import React from 'react';
import { formatDollars } from '../../utilities';

const styles = {
  beerCard: {
    marginBottom: "10px",
    padding: "20px 0 10px 0"
  }
};

export const TopBeerCard = (props) => {
  let { beer } = props;

  return (
    <div style={ styles.beerCard }>
      <h2>Top Selling Beer</h2>
      <h3>{ beer.name }</h3>
      <h4>Style: { beer.style }</h4>
      <h4>Brewer: { beer.brewer}</h4>
      <h4>Total Keg Cost: $ { formatDollars(beer.kegPrice) }</h4>
    </div>
  );
};
