import React from 'react';
import TableCell from '../table-cell';

const TableRow = ({row, columns, style}) => {
  const {id} = row;

  const tableCells = columns
    .map(col => row[col.name])
    .map(cell => <TableCell key={`${id}+${cell}`} content={cell}/>);
  return (
    <div key={id} className='table--row' style={style}>
      {tableCells}
    </div>
  );
};

export default TableRow;
