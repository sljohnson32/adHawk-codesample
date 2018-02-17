import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';

export default class PopUp extends Component {

  state = {
    beerName: "",
    breweryName: "",
    beerStyle: "",
    date: null,
    open: false
  };

  //handle open/close dialog
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, beerName: "", breweryName: "", searchText: "", date: null, });
  };

  //handleInput
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  //handleDateChangehandleChange = (event, date) => {
  handleDateChange = (event, date) => {
    this.setState({ date: date });
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
  addBeer(tapId) {
    let { beerName, breweryName, beerStyle } = this.state;
    let newBeer = {
      tap_id: tapId,
      name: beerName,
      brewer: breweryName,
      style: beerStyle
    }
    console.log('Add Beer', newBeer)
    // this.props.postBeer(tapId, newBeer);
    this.handleClose();
  }

  render() {

    let { tapId, allBreweries } = this.props

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={ true }
        onClick={ this.handleClose }
      />,
      <RaisedButton
        label="Add Beer"
        primary={ true }
        onClick={ () => this.addBeer(tapId) }
      />
    ];

    return (
      <div>
        <FloatingActionButton
          onClick={ this.handleOpen }
          mini={ true }
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          actions={ actions }
          contentStyle={ contentStyle }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
          title="Add Beer"
          titleStyle={ titleStyle }
        >
          <p style={ pStyle }>Reminder: this will retire the current beer on tap</p>
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
            dataSource={ beerStyles }
            filter={ (searchText, key) => (key.indexOf(searchText) !== -1) }
            openOnFocus={ true }
          />
          <AutoComplete
            floatingLabelText="Name of brewery"
            hintText="Name of brewery"
            searchText={ this.state.breweryName }
            onUpdateInput={ this.handleBreweryInput }
            openOnFocus={ true }
            filter={ AutoComplete.caseInsensitiveFilter }
            dataSource={ allBreweries }
          />
          <DatePicker
            floatingLabelText="Start Date"
            hintText="Start Date"
            mode="landscape"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </Dialog>
      </div>
    );
  }
}

const beerStyles = [
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

const contentStyle = {
  width: '400px',
};

const titleStyle = {
  paddingBottom: '10px'
}

const pStyle = {
  fontStyle: "italic",
  margin: "0",
  paddingBottom: "20px",
}

// <AutoComplete
// hintText="Name of brewery"
// searchText={ this.state.breweryName }
// onUpdateInput={ this.handleBreweryInput }
// dataSource={beerStyles}
// filter={ (searchText, key) => (key.indexOf(searchText) !== -1) }
// openOnFocus={ true }
// />
