import React, { Component } from 'react';
import TapsHeader from '../TapsHeader'
import TapCard from '../../containers/TapCard-container'
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

class CurrentTaps extends Component {

  render() {

    let currentTaps = this.props.tapsData.map(tap => {
      return <TapCard {...tap} key={ tap.id } />;
    })

    return (
      <Paper zDepth={ 1 } >
        <TapsHeader addTap={ this.props.addTap } />
        <Paper style={ styles.paper } zDepth={ 1 } >
          { currentTaps }
        </Paper>
      </Paper>
    );
  };
};

export default CurrentTaps;

const styles = {
  paper: {
    boxSizing: "content-box",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "10px",
    padding: "10px",
    flexWrap: "wrap"
  }
};
