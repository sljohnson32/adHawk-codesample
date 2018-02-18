import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TapsHeader extends Component {


  state = {
    open: false,
    tapName: ""
  };

  //handle open/close dialog
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, tapName: "" });
  };

  // //handleInput
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  //add tap
  addTap = () => {
    let { tapName } = this.state;
    let newTap = {
      name: tapName
    }
    this.props.addTap(newTap);
    this.handleClose();
  }

  render () {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={ true }
        onClick={ this.handleClose }
      />,
      <RaisedButton
        label="Add Tap"
        primary={ true }
        onClick={ this.addTap }
      />
    ];

    return (
      <div>
        <h3>Current Taps</h3>
        <FloatingActionButton
          mini={ true }
          onClick={ this.handleOpen }
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          actions={ actions }
          contentStyle={ styles.tapDialog }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.handleClose }
          title="Add Tap"
        >
          <TextField
            id="tapName"
            floatingLabelText="Name of tap"
            hintText="Name of tap"
            value={ this.state.tapName }
            onChange={ this.handleChange }
          />
        </Dialog>
      </div>
    );
  }
}

const styles = {
  tapDialog: {
    width: '300px',
  }
};
