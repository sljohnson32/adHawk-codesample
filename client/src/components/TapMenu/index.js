import React, { Component } from 'react';
import BeerForm from '../PopUpForms/BeerForm';
import TapForm from '../PopUpForms/TapForm';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';


export default class TapMenu extends Component {

  state = {
    beerFormOpen: false,
    tapFormOpen: false
  };

  //handle open/close dialog
  toggleBeerForm = () => {
    this.setState({ beerFormOpen: !this.state.beerFormOpen  });
  };

  toggleTapForm = () => {
    this.setState({ tapFormOpen: !this.state.tapFormOpen });
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

    let { tapId, tapName, allBreweries, currentBeerId, addBeer } = this.props

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
            primaryText="Add Beer"
            onClick={ this.toggleBeerForm }
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
        <BeerForm
          open={ this.state.beerFormOpen }
          handleClose={ this.toggleBeerForm }
          addBeer={ addBeer }
          tapId={ tapId }
          allBreweries={ allBreweries }
          currentBeerId={ currentBeerId }
        />
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
