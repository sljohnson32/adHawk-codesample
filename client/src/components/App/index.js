import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header'
import TapsPage from '../TapsPage'
import UploadPage from '../UploadPage'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getAllTaps();
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Route exact path="/" component={ TapsPage } />
        <Route path="/data-upload" component={ UploadPage } />
      </div>
    );
  }
}

export default App;
