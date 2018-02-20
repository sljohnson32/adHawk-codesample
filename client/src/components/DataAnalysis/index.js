import React, { Component} from 'react';
import moment from 'moment';
import { beerStyles } from '../../utilities';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class DataAnalysis extends Component {

  createTapRow(tap, index) {
    return (
      <TableRow key={ index }>
        <TableRowColumn>{ tap.name }</TableRowColumn>
        <TableRowColumn>{ `$ ${tap.aveGlassPrice}` }</TableRowColumn>
      </TableRow>
    )
  }

  render() {

    let { tapsData, beersData, resetData } = this.props;

    let tapRows = tapsData.map((tap, index) => this.createTapRow(tap, index));


    return (
      <Paper zDepth={ 1 }>
        <RaisedButton
          label="Reset Data"
          primary={ true }
          onClick={ resetData }
        />
        <Table
          maxHeight={ "300px" }
          fixedHeader={ true }
        >
          <TableHeader
            adjustForCheckbox= { false }
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
    );
  }
}
