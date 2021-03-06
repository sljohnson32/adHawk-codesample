import React, { Component } from 'react';
import { beerStyles } from '../../utilities';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

const beerStylesData = [
  'Amber Ale',
  'Amber Lager',
  'Bock',
  'Brown Ale',
  'Dark Lager',
  'IPA',
  'Pale Ale',
  'Pale Lager',
  'Pilsner',
  'Porter',
  'Sour Ale',
  'Specialty Beer',
  'Stout',
  'Strong Ale',
  'Wheat Beer',
  'Other'
];

const styles = {
  dialog: {
    width: '400px',
  },
  title: {
    paddingBottom: '10px'
  },
  p: {
    fontStyle: "italic",
    margin: "0",
    paddingBottom: "20px",
  },
  dropdown: {
    maxHeight: "280px",
    overflow: "scroll"
  }
}

const formatStyle = data => {
  return data.replace(' ', '_').toUpperCase()
}

export default class TapMenu extends Component {

  state = {
    beerId: "",
    beerName: "",
    breweryName: "",
    beerStyle: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.actionType === "Edit") {
      let { id, name, brewer, style} = nextProps.currentBeer;
      this.setState({ beerId: id, beerName: name, breweryName: brewer, beerStyle: beerStyles[style] })
    }
  }


  handleClose = () => {
    this.setState({ open: false, beerId: "", beerName: "", breweryName: "", beerStyle: "" }, () => this.props.handleClose());
  };

  //handleInput
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  //autocomplete
  handleTypeInput = (searchText) => {
    this.setState({
      beerStyle: searchText,
    });
  };

  handleBreweryInput = (searchText) => {
    this.setState({
      breweryName: searchText,
    });
  };

  //add beer
  handleBeerForm(tapId, currentBeerId, actionType) {
    let { beerId, beerName, breweryName, beerStyle } = this.state;
    let beerData = {
      tap_id: tapId,
      name: beerName,
      brewer: breweryName,
      style: formatStyle(beerStyle),
      on_tap: true
    }
    if (actionType === "Edit") {
      this.props.editBeer(beerId, beerData);
    } else {
      this.props.addBeer(beerData, currentBeerId);
    }
    this.handleClose();
  }

  render() {

    let { beerName, breweryName } = this.state
    let { tapId, allBreweries, actionType, currentBeerId } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={ true }
        onClick={ this.handleClose }
      />,
      <RaisedButton
        disabled={ beerName === "" || breweryName === "" }
        label={ actionType === "Edit" ? "Edit Beer" : "Add Beer" }
        primary={ true }
        onClick={ () => this.handleBeerForm(tapId, currentBeerId, actionType) }
      />
    ];

    return (
      <Dialog
        actions={ actions }
        contentStyle={ styles.dialog }
        modal={ false }
        open={ this.props.open }
        onRequestClose={ this.handleClose }
        title={ actionType === "Edit" ? "Edit Beer" : "Add Beer" }
        titleStyle={ styles.title }
      >
        { actionType === "Edit" ?
          <div/> :
          <p style={ styles.p }>Reminder: this will retire the current beer on tap</p>
        }
        <TextField
          id="beerName"
          floatingLabelText="Name of beer"
          hintText="Name of beer"
          value={ this.state.beerName }
          onChange={ this.handleChange }
        />
        <AutoComplete
          hintText="Type of beer"
          floatingLabelText="Type of beer"
          searchText={ this.state.beerStyle }
          onUpdateInput={ this.handleTypeInput }
          dataSource={ beerStylesData }
          filter={ AutoComplete.caseInsensitiveFilter }
          openOnFocus={ true }
          listStyle={ styles.dropdown }
        />
        <AutoComplete
          floatingLabelText="Name of brewery"
          hintText="Name of brewery"
          searchText={ this.state.breweryName }
          onUpdateInput={ this.handleBreweryInput }
          openOnFocus={ true }
          filter={ AutoComplete.caseInsensitiveFilter }
          dataSource={ allBreweries }
          listStyle={ styles.dropdown }
        />
      </Dialog>
    );
  }
}
