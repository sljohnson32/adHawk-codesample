/* eslint-disable */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { sortBeerData, sortTapData, calcAvePrice } from '../../utilities';
import DataAnalysis from '../DataAnalysis';
import FlatButton from 'material-ui/FlatButton';
import Papa from 'papaparse';

class UploadPage extends Component {

  constructor() {
    super();
    this.state = {
      file: null,
      beersData: [],
      tapsData: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResults = this.handleResults.bind(this);
    this.resetData = this.resetData.bind(this);
  }

  handleResults(results) {
    let { data } = results;
    let beersData = {};
    let tapsData = {};

    for (let i = 0; i < data.length; i++) {
      let currentBeer = beersData[data[i].beer];
      let currentTap = tapsData[data[i].tap_number];
      if (!currentBeer) {
        let beerData = {
          brewer: data[i].brewer,
          style: data[i].style,
          kegPrice: parseInt(data[i].keg_cost)
        };
        beersData[data[i].beer] = beerData;
      } else {
        currentBeer.kegPrice += parseInt(data[i].keg_cost);
      };
      if (!currentTap) {
        let tapData = {
          kegs: 1,
          glassPrice: parseInt(data[i].glass_price)
        };
        tapsData[data[i].tap_number] = tapData;
      } else {
        currentTap.kegs += 1;
        currentTap.glassPrice += parseInt(data[i].glass_price);
      }
    }

    this.setState({ beersData: sortBeerData(this.createArray(beersData)) , tapsData: sortTapData(calcAvePrice(this.createArray(tapsData))), file: "" });
  }

  createArray(obj) {
    let arrKeys = Object.keys(obj)
    return arrKeys.map(key => {
      obj[key].name = key;
      return obj[key]
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    Papa.parse(this.state.file, {
      download: true,
      header: true,
      skipEmptyLines: true,
	    complete: this.handleResults
    })
  };

  handleChange(e) {
    this.setState({ file: e.target.files[0] });
  };

  resetData() {
    this.setState({ tapsData: [], beersData: [] })
  }

  render() {
    return (
      <div>
        { this.state.beersData.length === 0 ?
          <form ref={ (el) => this.myFormRef = el } onSubmit={ this.handleSubmit }>
            <input
              accept="text/csv"
              type="file"
              onChange={ this.handleChange }
            />
            <FlatButton
              label="Upload Data"
              primary={ true }
              type="submit"
            />
          </form> :
          <DataAnalysis
            beersData={ this.state.beersData }
            tapsData={ this.state.tapsData }
            resetData={ this.resetData }
          />
        }
      </div>
    );
  }
}

export default withRouter(UploadPage);
