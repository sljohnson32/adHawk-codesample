import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
  tapDialog: {
    width: '300px',
  }
};

export default class TapForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tapName: "",
      error: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }


  handleClose = () => {
    this.setState({ tapName: "" }, () => this.props.handleClose())
  }

  // //handleInput
  handleChange = (event) => {
    let val = event.target.value
    if (this.props.allTapNames.includes(val) && val !== this.props.tapName) {
      this.setState({ tapName: val, error: true })
    } else this.setState({ tapName: val, error: false })
  };

  //add tap
  handleTapAction = () => {
    let { tapName, error } = this.state;
    let tap = {
      name: tapName
    }
    if (this.props.actionType === "Add") {
      if (!error) {
        this.props.tapAction(tap);
      }
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
        disabled={ this.state.error || this.state.tapName === "" }
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
          errorText={ this.state.error ? "Please choose a unique tap name" : null }
          floatingLabelText="Name of tap"
          hintText="Please use a unique tap name"
          value={ this.state.tapName }
          onChange={ this.handleChange }
        />
      </Dialog>
    );
  }
};
