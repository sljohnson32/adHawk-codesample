import React, { Component } from 'react';
import TapMenu from '../../containers/TapMenu-container';
import AppBar from 'material-ui/AppBar';
import TapHistory from '../TapHistory';
import { BeerCard } from '../BeerCard';
import { sortHistory } from '../../utilities';
import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  card: {
    width: "280px",
    margin: "5px"
  },
  header: {
    padding: "0"
  },
  leftIcon: {
    visibility: "hidden"
  }
};

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

    let { id, name, beersData, allTapHistory, allBreweries } = this.props;

    let currentBeer = beersData.filter(beer => beer.tap_id === id && beer.on_tap);

    let tapHistory = sortHistory(allTapHistory.filter(beer => beer.tap_id === id), "recent");

    return (
      <Card
        style={ styles.card }
      >
        <CardTitle
          style={ styles.header }
        >
          <AppBar
            title={ name }
            iconStyleLeft={ styles.leftIcon }
            iconElementRight={
              <TapMenu
                tapId={ id }
                tapName={ name }
                allBreweries={ allBreweries }
                currentBeer={ currentBeer[0] && currentBeer[0] }
              />
            }
          />
        </CardTitle>
        <CardText>
          <BeerCard
            currentBeer={ currentBeer[0] }
          />
        </CardText>
        <CardActions>
          <FlatButton
            label="Tap History"
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
};
