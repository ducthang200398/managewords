import { FormControl, InputLabel, TextField } from '@material-ui/core';
import React from 'react';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import {withStyles} from "@material-ui/styles"
import styles from './styles'
const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return null;
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }
  
const renderSelectField = ({
    classes,
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl className={classes.Control} error={touched && error}>
      <InputLabel htmlFor="status">{label}</InputLabel>
      <Select
        // native
        {...input}
        {...custom}
        inputProps={{
          name: 'status',
          id:"status"
        }}
        value = {input.value}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
      </FormControl>
)
export default withStyles(styles)(renderSelectField);