import React, { Component } from 'react';
import TapMenu from '../../containers/TapMenu-container';
import TapHistory from '../TapHistory';
import { BeerCard } from '../BeerCard';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class TapCard extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  toggleHistory = () => {
    this.setState({ open: !this.state.open });
  };

  render() {

    let { id, name, beersData, tapHistory, allBreweries } = this.props;

    let currentBeer = beersData.filter(beer => {
      return beer.tap_id == id && beer.on_tap;
    })

    return (
      <Card
        style={ styles.card }
      >
        <CardTitle
          title={ name }
        >
          <TapMenu
            tapId={ id }
            tapName={name}
            allBreweries={ allBreweries }
            currentBeer={ currentBeer[0] && currentBeer[0] }
          />
        </CardTitle>
        <CardText>
          <BeerCard
            currentBeer={ currentBeer[0] }
          />
        </CardText>
        <CardActions>
          <FlatButton
            label="See History"
            onClick={this.toggleHistory}
          />
        </CardActions>
        <TapHistory
          open={ this.state.open }
          tapHistory={ tapHistory }
          handleClose={ this.toggleHistory }
        />
      </Card>
    );
  }
}

const styles = {
  card: {
    width: "300px"
  }
}
