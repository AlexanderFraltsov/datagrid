import React from 'react';
import { connect } from 'react-redux';

import {
  TextField,
  Box,
  IconButton
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import SwitchButton from '../switch-button';
import InputSelect from '../input-select';
import ColumnList from '../column-list';

import * as actions from '../../actions';

import './control-panel.css';

const ControlPanel = ({
  filters: {
    onlyActive,
    eyeColor,
    queryString,
  },
  columns,
  checkedRows,
  isVirtualization,
  checkActive,
  chooseEyeColor,
  setQueryString,
  toggleVirtualization,
  toggleColumn,
  removeRows,
  checkRow
}) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' minHeight='100px' className='control_panel'>
      <SwitchButton
        value={onlyActive}
        label='Only active users'
        onChange={checkActive} />
      <InputSelect
        label='Eye Color'
        id='mutiple-chip-label'
        selectedItems={eyeColor}
        onChange={chooseEyeColor}
        selectors={['blue', 'brown', 'green']} />
      <TextField
        label='Search what you want'
        variant='outlined'
        color='secondary'
        value={queryString}
        onChange={e => {setQueryString(e.target.value)}} />
      <ColumnList className='visible' columns={columns} onToggle={toggleColumn}/>
      <SwitchButton
        value={isVirtualization}
        label='Toggle virtualization'
        onChange={toggleVirtualization} />
      {checkedRows.length !== 0 ? (
        <IconButton size="medium" className='aside' onClick={()=>{
          removeRows(checkedRows);
          checkRow([]);
        }}>
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      ) : null}

    </Box>
  )
}

const mapStateToProps = (state) => {
  const {filters, columns, isVirtualization, checkedRows} = state;
  return {
    filters,
    columns,
    isVirtualization,
    checkedRows
  }
};

export default connect(mapStateToProps, actions)(ControlPanel);
