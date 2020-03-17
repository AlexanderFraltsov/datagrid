import React from 'react';
import { connect } from 'react-redux';
import { setSortValues } from '../../actions';

import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const HeaderCell = ({label, name, dataType, sort, setSortValues}) => {

  const idx = sort.findIndex(el => el.name === name);
  const direction = sort[idx] ? sort[idx].isSortDirectionToDown : null;

  const onHeaderCellClick = (e) => {

    let isSortDirectionToDown = true;
    if (idx !== -1) {
      isSortDirectionToDown = !sort[idx].isSortDirectionToDown;
    }
    const item = {name, dataType, isSortDirectionToDown};

    let arr = [...sort];
    if (e.shiftKey) {
      if (idx !== -1) {
        arr.splice(idx, 1);
      }
      arr.push(item);
    } else {
      arr=[item];
    }
    setSortValues(arr);
  };

  return (
    <div className='table--cell' onClick={onHeaderCellClick}>
      {label}
      {
        direction ?
        <ArrowDropUp /> :
        (typeof direction === 'boolean') && <ArrowDropDown />
      }
      <Typography
        variant='caption'
        color='secondary' >
        {idx !== -1 && sort.length > 1 ? idx + 1 : null}
      </Typography>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
};

const mapDispatchToProps = {
  setSortValues
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCell);
