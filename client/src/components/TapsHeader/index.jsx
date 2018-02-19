import React, { Component } from 'react';
import TapForm from '../PopUpForms/TapForm'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TapsHeader extends Component {

  state = {
    open: false
  };

  //handle open/close dialog
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {

    return (
      <div>
        <h3>Current Taps</h3>
        <FloatingActionButton
          mini={ true }
          onClick={ this.handleOpen }
        >
          <ContentAdd />
        </FloatingActionButton>
        <TapForm
          open={ this.state.open }
          actionType="Add"
          tapAction={  this.props.addTap }
          tapId={ null }
          tapName={ null }
          handleClose={ this.handleClose }
        />
      </div>
    );
  }
}
