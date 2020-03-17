import React from 'react';
import { connect } from 'react-redux';
import { checkRow } from '../../actions';

import {Checkbox} from '@material-ui/core';
import TableCell from '../table-cell';

const TableRow = ({row, columns, style, checkedRows, checkRow}) => {
  const {id} = row;
  const idx = checkedRows.findIndex(el => el === id);

  let checked = false;
  let clazzCheckbox = 'table--btn';
  let clazzRow = 'table--row';

  if (idx !== -1) {
    checked = true;
    clazzCheckbox += ' active';
    clazzRow += ' active';
  }

  const handleChange= (e) => {
    const newCheckedRows = [...checkedRows];
    (idx !== -1) ? newCheckedRows.splice(idx, 1) : newCheckedRows.push(id);
    checkRow(newCheckedRows);
  };

  const tableCells = columns
    .map(col => row[col.name])
    .map(cell => <TableCell key={`${id}+${cell}`} content={cell}/>);

  return (
    <div key={id} className={clazzRow} style={style} onClick={handleChange}>
      <Checkbox
        className={clazzCheckbox}
        checked={checked}
        onChange={()=>{}}
        value="primary"
      />
      {tableCells}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    checkedRows: state.checkedRows
  }
};

const mapDispatchToProps = {
  checkRow
};

export default connect(mapStateToProps, mapDispatchToProps)(TableRow);
