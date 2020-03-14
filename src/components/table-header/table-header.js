import React from 'react';
import HeaderCell from '../header-cell';

const TableHeader = ({labels}) => {

  const tableHeaders = labels.map((label) => <HeaderCell key={label} label={label}/>);

  return (
    <div className='table--header sticky-inner'>
      <div className='table--row'>
        {tableHeaders}
      </div>
    </div>
  )
}

export default TableHeader;
