import React from 'react';
import { connect } from 'react-redux';
import { setSortValues } from '../../actions';

import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';

const HeaderCell = ({label, name, dataType, sort, setSortValues}) => {

  const idx = sort.findIndex(el => el.name === name);
  const direction = sort[idx] ? sort[idx].isSortDirectionToDown : null;

  const onHeaderCellClick = (e) => {
    const isSortDirectionToDown = (idx === -1) ? true : !sort[idx].isSortDirectionToDown;
    const item = {name, dataType, isSortDirectionToDown};
    const arr = [item]
    console.log(arr);
    setSortValues(arr);
  }
  return (
    <div className='table--cell' onClick={onHeaderCellClick}>
      {label}
      {
        direction ?
        <ArrowDropDown /> :
        (typeof direction === 'boolean') && <ArrowDropUp />
      }
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
