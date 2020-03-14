import React from 'react';
import { CheckCircleRounded, NotInterested } from '@material-ui/icons';

const TableCell = ({content}) => {
  if (typeof content === 'boolean') {
    const icon = content ?
      <CheckCircleRounded color='primary' /> :
      <NotInterested color='error' />
    return <div key={`${content}`} className='table--cell'>{icon}</div>
  }
  return <div key={content} className='table--cell'>{content}</div>
};

export default TableCell;
