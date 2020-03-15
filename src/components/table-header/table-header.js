import React from 'react';
import HeaderCell from '../header-cell';

const TableHeader = ({columns}) => {

  const tableHeaders = columns.map((column) => {
    const {label, dataType, name} = column;
    return <HeaderCell key={label} label={label} dataType={dataType} name={name} />;
  });

  return (
    <div className='table--header sticky-inner'>
      <div className='table--row'>
        {tableHeaders}
      </div>
    </div>
  )
}

export default TableHeader;
