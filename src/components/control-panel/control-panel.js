import React from 'react';
import { connect } from 'react-redux';

import {
  FormGroup,
  FormControlLabel,
  Switch,
  Input,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as actions from '../../actions';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const ControlPanel = ({onlyActive, eyeColor, checkActive, chooseEyeColor}) => {
  const classes = useStyles();
  const selected = ['blue', 'brown', 'green'];
  return <FormGroup row>
    <FormControlLabel
      control={
        <Switch
          checked={onlyActive}
          onChange={checkActive}
          value={onlyActive}
          color='primary'
        />
      }
      label='Only active users'
      labelPlacement='top'
      />
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-chip-label">Eye Color</InputLabel>
      <Select
        labelId="mutiple-chip-label"
        multiple
        value={eyeColor}
        onChange={(e) => chooseEyeColor(e.target.value)}
        input={<Input />}
        renderValue={eyeColor => {
          const elms = eyeColor.map(value => (
            <Chip key={value} label={value} className={classes.chip} />
          ))
          return (
          <div className={classes.chips}>
            {elms}
          </div>
        )}}
        >
        {selected.map(
          name => <MenuItem key={name} value={name}>{name}</MenuItem>
        )}
      </Select>
    </FormControl>

  </FormGroup>
}

const mapStateToProps = (state) => {
  return {
    onlyActive: state.onlyActive,
    eyeColor: state.eyeColor
  }
};

export default connect(mapStateToProps, actions)(ControlPanel);
