import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

import {CheckCircleRounded, NotInterested} from '@material-ui/icons';


const TableView = ({data}) => {

  const getCell = (content, index) => {
    let align = 'right';
    if (index === 0) align = 'left';
    if (typeof content === 'boolean') {
      const icon = content?<CheckCircleRounded color='primary'/>:<NotInterested color='error'/>
      return <TableCell key={`${content}`} align={align}>{icon}</TableCell>
    }
    return <TableCell key={content} align={align}>{content}</TableCell>
  };

  const _headers = ['Name', 'Age', 'Eye Color', 'Phone', 'Is Active', 'Balance', 'Registered'];
  const tableHeaders = _headers.map((header, index) => getCell(header, index));

  const tableData = data.map((row) => {
    const {id, name, age, eyeColor, phone, isActive, balance, registered} = row;
    const _cells = [name, age, eyeColor, phone, isActive, balance, registered];

    const tableCells = _cells.map((cell, index) => getCell(cell, index));
    return (
      <TableRow key={id}>
        {tableCells}
      </TableRow>
    )
  });

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            {tableHeaders}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
