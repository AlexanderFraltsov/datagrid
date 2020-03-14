import React from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';

const HeaderCell = ({label}) => {
  const onArrowClick = (e)=>{const elem = e.target.closest('.table--btn'); elem.classList.toggle('active'); }
  return (
    <div className='table--cell'>
      {label}
      <div className='arrows'>
        <IconButton size='small' className='table--btn' onClick={onArrowClick}>
          <ArrowDropUp />
        </IconButton>
        <IconButton size='small' className='table--btn' onClick={onArrowClick}>
          <ArrowDropDown />
        </IconButton>
      </div>
    </div>
  )
}

export default HeaderCell;
