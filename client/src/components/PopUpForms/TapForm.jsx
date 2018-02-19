import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TapForm extends Component {

  state = {
    tapName: ""
  };

  handleClose = () => {
    this.setState({ tapName: "" }, () => this.props.handleClose())
  }

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
      <Dialog
        actions={ actions }
        contentStyle={ styles.tapDialog }
        modal={ false }
        open={ this.props.open }
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
    );
  }
}

const styles = {
  tapDialog: {
    width: '300px',
  }
};
