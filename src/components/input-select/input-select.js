import React from 'react';

import {
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: 160,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const InputSelect = ({label, id, selectedItems, onChange, selectors}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={id}
        multiple
        value={selectedItems}
        onChange={(e) => onChange(e.target.value)}
        input={<Input />}
        renderValue={selectedItems => {
          const elms = selectedItems.map(value => (
            <Chip key={value} label={value} className={classes.chip} />
          ))
          return (
          <div className={classes.chips}>
            {elms}
          </div>
        )}}
        >
        {selectors.map(
          name => <MenuItem key={name} value={name}>{name}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default InputSelect;
