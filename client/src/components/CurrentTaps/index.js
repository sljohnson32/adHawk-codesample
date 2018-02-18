import React, { Component } from 'react';
import TapCard from '../../containers/TapCard-container'
import './CurrentTaps-styles.css';
import Paper from 'material-ui/Paper';

class CurrentTaps extends Component {

  render() {

    let currentTaps = this.props.tapsData.map(tap => {
      return <TapCard {...tap} key={ tap.id } />;
    })

    return (
      <Paper style={ styles.paper } zDepth={ 1 } >
        <
        { currentTaps }
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
    padding: "10px"
  }
};
