import React, { Component} from 'react';
import moment from 'moment';
import { beerStyles } from '../../utilities';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export default class TapHistory extends Component {

  createRow(beer, index) {
    return (
      <TableRow key={ index }>
        <TableRowColumn>{ beer.name }</TableRowColumn>
        <TableRowColumn>{ beer.brewer }</TableRowColumn>
        <TableRowColumn>{ beerStyles[beer.style] }</TableRowColumn>
        <TableRowColumn>{ moment(beer.start_date).format("dddd, MMMM Do YYYY") }</TableRowColumn>
      </TableRow>
    )
  }

  render() {

    let { open, handleClose, tapHistory } = this.props;

    const actions = [
      <RaisedButton
        label="Close History"
        primary={ true }
        onClick={ handleClose }
      />
    ];

    let beerHistory = tapHistory.map((beer, index) => this.createRow(beer, index));

    return (
      <Dialog
        actions={ actions }
        autoScrollBodyContent={ true }
        modal={ false }
        open={ open }
        onRequestClose={ handleClose }
        title="Tap History"
      >
        <Table
          maxHeight={ "300px" }
          fixedHeader={ true }
        >
          <TableHeader
            adjustForCheckbox= { false }
            displaySelectAll={ false }
          >
            <TableRow>
              <TableHeaderColumn>Beer</TableHeaderColumn>
              <TableHeaderColumn>Brewer</TableHeaderColumn>
              <TableHeaderColumn>Style</TableHeaderColumn>
              <TableHeaderColumn>Tap Date</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          { tapHistory.length > 0 &&
              <TableBody
                displayRowCheckbox={ false }
                showRowHover={ true }
              >
                { beerHistory }
              </TableBody>
          }
        </Table>
        { tapHistory.length == 0 && <p>No beer history. This must be a new tap!</p> }
      </Dialog>
    );
  }
}
