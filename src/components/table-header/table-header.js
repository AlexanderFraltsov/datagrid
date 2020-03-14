import React from 'react';
import HeaderCell from '../header-cell';

const TableHeader = () => {

  const _headers = ['Name', 'Age', 'Eye Color', 'Phone', 'Is Active', 'Balance', 'Registered'];
  const tableHeaders = _headers.map((header) => <HeaderCell key={header} content={header}/>);

  return (
    <div className='table--header sticky-inner'>
      <div className='table--row'>
        {tableHeaders}
      </div>
    </div>
  )
}

export default TableHeader;
