import React from 'react';
import {
  FormControlLabel,
  Switch,
} from '@material-ui/core';

const SwitchButton = ({value, label, onChange}) => {
  return (
    <FormControlLabel
    control={
      <Switch
        checked={value}
        onChange={onChange}
        value={value}
        color='primary'
      />
    }
    label={label}
    labelPlacement='top' />
  );
};

export default SwitchButton;
