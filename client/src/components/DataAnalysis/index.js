import React, { Component} from 'react';
import { TopBeerCard } from '../TopBeerCard';
import { formatDollars } from '../../utilities';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
  displayBox: {
    display: "flex",
    flexDirection: "columns",
    margin: "10px 5%"
  },
  leftSide: {
    marginRight: "10px",
    width: "35%"
  },
  rightSide: {
    marginRight: "10px",
    width: "65%"
  },
  paper: {
    margin: "10px",
    padding: "10px"
  }
};

export default class DataAnalysis extends Component {

  createTapRow(tap, index) {
    return (
      <TableRow key={ index }>
        <TableRowColumn>{ tap.name }</TableRowColumn>
        <TableRowColumn>${ tap.aveGlassPrice }</TableRowColumn>
      </TableRow>
    )
  }

  createBeerRow(beer, index) {
    return (
      <TableRow key={ index }>
        <TableRowColumn>{ beer.name }</TableRowColumn>
        <TableRowColumn>{ beer.style }</TableRowColumn>
        <TableRowColumn>{ beer.brewer }</TableRowColumn>
        <TableRowColumn>${ formatDollars(beer.kegPrice) }</TableRowColumn>
      </TableRow>
    )
  }

  render() {

    let { tapsData, beersData, resetData } = this.props;

    let tapRows = tapsData.map((tap, index) => this.createTapRow(tap, index));
    let beerRows = beersData.map((beer, index) => this.createBeerRow(beer, index));


    return (
      <Paper zDepth={ 1 } style={styles.paper}>
        <RaisedButton
          label="Reset Data"
          primary={ true }
          style={{ margin: "20px 0" }}
          onClick={ resetData }
        />
        <div style={ styles.displayBox }>
          <Paper
            style={ styles.leftSide }
            zDepth={ 1 }
          >
            <Paper style={ styles.paper } zDepth={ 2 }>
              <TopBeerCard beer={ beersData[0] } />
            </Paper>
            <h3 style={{ marginTop: "25px" }}>Ave Glass Price by Tap</h3>
            <Table
              fixedHeader={ true }
              minHeight={ "300px" }
            >
              <TableHeader
                adjustForCheckbox={ false }
                displaySelectAll={ false }
              >
                <TableRow>
                  <TableHeaderColumn>Tap Name</TableHeaderColumn>
                  <TableHeaderColumn>Ave. Glass Price</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={ false }
                showRowHover={ true }
              >
                { tapRows }
              </TableBody>
            </Table>
          </Paper>
          <Paper
            style={ styles.rightSide }
            zDepth={ 2 }
          >
            <h3 style={{ marginTop: "20px" }}>List of Beers</h3>
            <Table
              maxHeight={ "300px" }
              fixedHeader={ true }
            >
              <TableHeader
                adjustForCheckbox={ false }
                displaySelectAll={ false }
              >
                <TableRow>
                  <TableHeaderColumn>Beer Name</TableHeaderColumn>
                  <TableHeaderColumn>Style</TableHeaderColumn>
                  <TableHeaderColumn>Brewer</TableHeaderColumn>
                  <TableHeaderColumn>Total Keg Costs</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={ false }
                showRowHover={ true }
              >
                { beerRows }
              </TableBody>
            </Table>
          </Paper>
        </div>
      </Paper>
    );
  }
}
