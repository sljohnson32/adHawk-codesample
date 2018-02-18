import React, { Component } from 'react';
import PopUp from '../PopUp';
import TapMenu from '../TapMenu';
import { BeerCard } from '../BeerCard';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class TapCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {

    let { id, name, beersData, allBreweries } = this.props;

    let currentBeer = beersData.filter(beer => {
      return beer.tap_id == id && beer.on_tap;
    })

    return (
      <Card
        expanded={ this.state.expanded }
        style={ styles.card }
      >
        <CardTitle
          title={ name }
        >
          <TapMenu />
          <PopUp tapId={ id } allBreweries={ allBreweries } />
        </CardTitle>
        <CardText>
          <BeerCard currentBeer={ currentBeer[0] } />
        </CardText>
        <CardTitle
          title="Tap History"
          expandable={true}
        />
        <CardText
          expandable={true}>
          This will be a table of all previous beers!
        </CardText>
        <CardActions>
          <FlatButton
            label={ this.state.expanded ? "Close History" : "See History" } onClick={this.toggleExpanded} />
        </CardActions>
      </Card>
    );
  }
}

const styles = {
  card: {
    width: "300px"
  }
}
