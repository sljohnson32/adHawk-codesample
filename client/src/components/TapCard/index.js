import React, { Component } from 'react';
import PopUp from '../PopUp';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class TapCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  toggleExpanded = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {

    let { id, name } = this.props;

    return (
      <Card
        expanded={ this.state.expanded }
        style={ styles.card }
      >
        <CardTitle
          title={ name }
        >
          <PopUp />
        </CardTitle>
        <CardText>
          <h4>Current Beer</h4>
          <p>Beer Type</p>
          <h4>Brewer</h4>
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
