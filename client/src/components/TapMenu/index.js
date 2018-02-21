import React, { Component } from 'react';
import BeerForm from '../PopUpForms/BeerForm';
import TapForm from '../../containers/TapForm-container';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Divider from 'material-ui/Divider';


export default class TapMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      actionType: "",
      beerFormOpen: false,
      tapFormOpen: false
    }
  }

  //handle open/close dialog
  toggleBeerForm = (type) => {
    if (type === "Edit") {
      this.setState({ beerFormOpen: !this.state.beerFormOpen, actionType: "Edit" })
    } else this.setState({ beerFormOpen: !this.state.beerFormOpen, actionType: "" });
  };

  toggleTapForm = () => {
    this.setState({ tapFormOpen: !this.state.tapFormOpen });
  }

  //deleteTap
  deleteTap(tapId) {
    this.props.deleteTap(tapId);
  }

  //retireBeer
  deleteBeer(beerId) {
    this.props.deleteBeer(beerId);
  }

  render() {

    let { tapId, tapName, allBreweries, currentBeer, addBeer, editBeer } = this.props

    let currentBeerId = currentBeer ? currentBeer.id : '';

    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton>
              <MoreVertIcon color="white"/>
            </IconButton>
          }
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >

          <MenuItem
            primaryText="Add Beer"
            onClick={ () => this.toggleBeerForm() }
          />
          <MenuItem
            disabled={ currentBeerId === "" }
            primaryText="Edit Beer"
            onClick={ () => this.toggleBeerForm("Edit") }
          />
          <MenuItem
            disabled={ currentBeerId === "" }
            primaryText="Retire Beer"
            onClick={ () => this.deleteBeer(currentBeerId) }
          />
          <Divider />
          <MenuItem
            primaryText="Edit Tap"
            onClick={ this.toggleTapForm }
          />
          <MenuItem
            primaryText="Delete Tap"
            onClick={ () => this.deleteTap(tapId) }
          />

        </IconMenu>
        <BeerForm
          open={ this.state.beerFormOpen }
          tapId={ tapId }
          allBreweries={ allBreweries }
          currentBeer={ currentBeer }
          actionType={ this.state.actionType }
          addBeer={ addBeer }
          editBeer={ editBeer }
          handleClose={ this.toggleBeerForm }
        />
        <TapForm
          open={ this.state.tapFormOpen }
          tapId={ tapId }
          tapName={ tapName }
          tapAction={  this.props.editTap }
          handleClose={ this.toggleTapForm }
        />
      </div>
    );
  }
}
