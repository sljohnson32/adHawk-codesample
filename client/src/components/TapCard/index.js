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
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  toggleExpanded = () => {
    this.setState({expanded: !this.state.expanded});
  };

  render() {

    let { id, name } = this.props;

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
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
        <CardText expandable={true}>
          This is a table of all previous beers!
        </CardText>
        <CardActions>
          <FlatButton label={ this.state.expanded ? "Close History" : "See History" } onClick={this.toggleExpanded} />
        </CardActions>
      </Card>
    );
  }
}


// class TapCard extends Component {
//
//   render() {
//     let { id, name } = this.props;
//
//     return (
//       <div className="tap-card">
//         <section className='tap-header'>
//           <h3>{name}</h3>
//           <PopUp />
//         </section>
//         <section className="tap-info">
//           <h4>Current Beer</h4>
//           <p>Beer Type</p>
//           <h4>Brewer</h4>
//         </section>
//       </div>
//     );
//   }
// }
//
// export default TapCard;
