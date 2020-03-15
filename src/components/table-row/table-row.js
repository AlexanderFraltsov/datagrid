import React from 'react';
import { connect } from 'react-redux';
import { checkRow } from '../../actions';

import {Checkbox} from '@material-ui/core';
import TableCell from '../table-cell';
import { getCheckedRows } from '../../utils'

const TableRow = ({row, columns, index, style, checkedRows, checkRow}) => {
  const {id} = row;
  const idx = checkedRows.findIndex(el => el === index);

  const tableCells = columns
    .map(col => row[col.name])
    .map(cell => <TableCell key={`${id}+${cell}`} content={cell}/>);

  let checked = false;
  let clazzCheckbox = 'table--btn';
  let clazzRow = 'table--row';

  if (idx !== -1) {
    checked = true;
    clazzCheckbox += ' active';
    clazzRow += ' active';
  }

  const handleChange= (e) => {
    let newCheckedRows = [...checkedRows];
    if (e.shiftKey) {
      newCheckedRows = getCheckedRows(newCheckedRows, index);
    } else {
      (idx !== -1) ? newCheckedRows.splice(idx, 1) : newCheckedRows.push(index);
    }
    checkRow(newCheckedRows);
  };

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
