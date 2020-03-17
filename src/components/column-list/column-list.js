import React from 'react';

import {
  Box,
  Typography
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  columnListItem: {
    '&:hover': {
      backgroundColor: 'burlywood',
      cursor: 'pointer',
    }
  },
  columnList: {
    margin: '0px 20px',
    padding: '5px 0px',
  }
}));

const ColumnList = ({columns, onToggle}) => {
  const classes = useStyles();
  const togglers = columns.map((col, index) => {
    const {label, visible} = col;
    const color=visible? 'primary': 'secondary';
    return (
      <Typography
        className={classes.columnListItem}
        variant='body2'
        color={color}
        align='center'
        key={label}
        onClick={()=>onToggle(index)} >
        {label.toUpperCase()}
      </Typography>
    )
  })

  return (
    <Box display='flex' flexDirection='column' className={classes.columnList}>
      {togglers}
    </Box>
  )
}

export default ColumnList;
