import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
    paddingLeft: '125px',
    fontSize: '34px',
    fontWeight: 'bold'
  },
  button: {
    width: '125px'
  }
};

class Header extends Component {

  constructor() {
    super()

    this.goHome = this.goHome.bind(this);
    this.goUpload = this.goUpload.bind(this);
  }

  goHome() {
    this.props.history.push('/')
  }

  goUpload() {
    this.props.history.push('/data-upload')
  }

  render() {

    const { location } = this.props

    let linkButton = (
      location.pathname === "/" ?
        <FlatButton
          label="Upload Data"
          onClick={ this.goUpload }
          style={ styles.button }
        /> :
        <FlatButton
          label="Home"
          onClick={ this.goHome }
          style={ styles.button }
        />
    )

    return (
      <AppBar
        title={ <span style={styles.title}>Beer Force One</span> }
        onTitleClick={ this.goHome }
        showMenuIconButton={ false }
        iconElementRight={ linkButton }
      />
    );
  }
}

export default withRouter(Header);
