import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const beerTypes = [];
for (let i = 0; i < 100; i++ ) {
  beerTypes.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
}

export default class BeerTypeDropdown extends Component {
  state = {
    value: 10,
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  render() {
    return (
      <SelectField { ...this.props }
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={200}
      >
        {beerTypes}
      </SelectField>
    );
  }
}
