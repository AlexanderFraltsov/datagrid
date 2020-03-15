import React from 'react';

import {Checkbox} from '@material-ui/core';
import HeaderCell from '../header-cell';

const TableHeader = ({columns}) => {

  const checked = false;
  const handleChange= () => {};

  const tableHeaders = columns.map((column) => {
    const {label, dataType, name} = column;
    return <HeaderCell key={label} label={label} dataType={dataType} name={name} />;
  });

  return (
    <div className='table--header sticky-inner'>
      <div className='table--row'>
        <Checkbox
          className='table--btn'
          checked={checked}
          onChange={handleChange}
          value="primary"
        />
        {tableHeaders}
      </div>
    </div>
  )
}

export default TableHeader;
