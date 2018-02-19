import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

export default class TapHistory extends Component {

  render() {

    let { open, handleClose, tapHistory } = this.props;

    const actions = [
      <RaisedButton
        label="Close History"
        primary={ true }
        onClick={ handleClose }
      />
    ];

    return (
      <Dialog
        actions={ actions }
        modal={ false }
        open={ open }
        onRequestClose={ handleClose }
        title="Tap History"
      >
        <p>History data will go here....</p>
      </Dialog>
    );
  }
}
