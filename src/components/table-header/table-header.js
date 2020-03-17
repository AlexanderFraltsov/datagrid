import React from 'react';

import { connect } from 'react-redux';
import { checkRow } from '../../actions';
import {Checkbox} from '@material-ui/core';
import HeaderCell from '../header-cell';

const TableHeader = ({columns, arrayOfID, checkRow, checkedRows}) => {

  const checked = (checkedRows.length === arrayOfID.length);

  let clazzCheckbox = 'table--btn';

  if (checked) {
    clazzCheckbox += ' active';
  }

  const handleChange= (e) => {
    if (checked) {
      checkRow([]);
    } else {
      checkRow(arrayOfID);
    };
  };

  const tableHeaders = columns.map((column) => {
    const {label, dataType, name} = column;
    return <HeaderCell key={label} label={label} dataType={dataType} name={name} />;
  });

  return (
    <div className='table--header sticky-inner'>
      <div className='table--row'>
        <Checkbox
          className={clazzCheckbox}
          checked={checked}
          onChange={handleChange}
          value="primary"
        />
        {tableHeaders}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableHeader);
