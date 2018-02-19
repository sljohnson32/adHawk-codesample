import React, { Component } from 'react';
import TapForm from '../PopUpForms/TapForm';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';
import DatePicker from 'material-ui/DatePicker';

export default class TapMenu extends Component {

  state = {
    beerName: "",
    breweryName: "",
    beerStyle: "",
    date: null,
    open: false,
    tapFormOpen: false
  };

  //handle open/close dialog
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, beerName: "", breweryName: "", searchText: "", date: null, });
  };

  toggleTapForm = () => {
    this.setState({ tapFormOpen: !this.state.tapFormOpen });
  }

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
  addBeer(tapId, currentBeerId) {
    let { beerName, breweryName, beerStyle, date } = this.state;
    let newBeer = {
      tap_id: tapId,
      name: beerName,
      brewer: breweryName,
      style: formatStyle(beerStyle),
      start_date: date,
      on_tap: true
    }
    this.props.addBeer(newBeer, currentBeerId);
    this.handleClose();
  }

  //editTap
  editTap() {
    this.toggleTapForm()
  }

  //deleteTap
  deleteTap(tapId) {
    this.props.deleteTap(tapId);
    this.handleClose();
  }

  render() {

    let { tapId, tapName, allBreweries, currentBeerId } = this.props

    const actions = [
      <FlatButton
      label="Cancel"
      secondary={ true }
      onClick={ this.handleClose }
      />,
      <RaisedButton
      label="Add Beer"
      primary={ true }
      onClick={ () => this.addBeer(tapId, currentBeerId) }
      />
    ];

    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem
            id="beer"
            name="beer"
            primaryText="Add Beer"
            onClick={ this.handleOpen }
            />
          <Divider />
          <MenuItem
            primaryText="Edit Tap"
            onClick={ () => this.editTap(tapId) }
          />
          <MenuItem
            primaryText="Delete Tap"
            onClick={ () => this.deleteTap(tapId) }
          />
        </IconMenu>
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
            filter={ AutoComplete.caseInsensitiveFilter }
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
        <TapForm
          open={ this.state.tapFormOpen }
          tapAction={  this.props.editTap }
          tapId={ tapId }
          tapName={ tapName }
          handleClose={ this.toggleTapForm }
        />
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

const formatStyle = data => {
  return data.replace(' ', '_').toUpperCase()
}
