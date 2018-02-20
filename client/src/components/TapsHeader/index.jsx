import React, { Component } from 'react';
import TapForm from '../../containers/TapForm-container';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class TapsHeader extends Component {

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render () {

    return (
      <div style={ styles.container }>
        <h3 style={ styles.header }>Current Taps</h3>
        <RaisedButton
          label="Add Tap"
          style={ styles.tapButton }
          primary={ true }
          onClick={ this.handleOpen }
        />
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

const styles = {
  container: {
    padding: "10px",
  },
  header: {
    display: "inline-block",
    fontSize: "30px",
    paddingTop: "5px"
  },
  tapButton: {
    marginLeft: "20px"
  }
}
