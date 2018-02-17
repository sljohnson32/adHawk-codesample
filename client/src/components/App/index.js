import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header'
import CurrentTaps from '../../containers/CurrentTaps-container'
import UploadPage from '../UploadPage'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAllData();
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Route exact path="/" component={ CurrentTaps } />
        <Route path="/data-upload" component={ UploadPage } />
      </div>
    );
  }
}

export default App;
