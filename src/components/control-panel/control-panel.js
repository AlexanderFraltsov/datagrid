import React from 'react';
import { connect } from 'react-redux';

import {
  TextField,
  Box
} from '@material-ui/core';

import SwitchButton from '../switch-button';
import InputSelect from '../input-select';
import ColumnList from '../column-list';

import {
  checkActive,
  chooseEyeColor,
  setQueryString,
  toggleVirtualization,
  toggleColumn
} from '../../actions';

const ControlPanel = ({
  filters: {
    onlyActive,
    eyeColor,
    queryString,
  },
  columns,
  checkActive,
  chooseEyeColor,
  setQueryString,
  toggleVirtualization,
  isVirtualization,
  toggleColumn
}) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' minHeight='100px'>
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
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    columns: state.columns,
    isVirtualization: state.isVirtualization
  }
};

const mapDispatchToProps = {
  toggleColumn,
  checkActive,
  chooseEyeColor,
  setQueryString,
  toggleVirtualization,
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
