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
  handleTapAction = () => {
    let { tapName } = this.state;
    let tap = {
      name: tapName
    }
    if (this.props.actionType == "Add") {
      this.props.tapAction(tap);
    } else {
      this.props.tapAction(this.props.tapId, tap)
    }
    this.handleClose();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.tapName !== null) {
      this.setState({ tapName: nextProps.tapName })
    }
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
        onClick={ this.handleTapAction }
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
