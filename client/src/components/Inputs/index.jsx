import React, { Component } from 'react';
import { BeerTypeDropdown } from './InputFields';

export default class NewBeerInput extends Component {

  constructor() {
    super()
    this.state = {
      beerName: '',
      beerType: '',
      brewer: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <BeerTypeDropdown />
    )
  }
}
