import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import UnlimitedTextfield from '../common/unlimited-textfield';

const CommonInput = props => {
  const { description, onChange, value } = props;
  return (
    <Grid container item xs={6} alignItems="center" justify="center">
      <Grid item xs={3}>
        <Typography variant="caption">{description}</Typography>
      </Grid>
      <Grid item xs={7}>
        <UnlimitedTextfield value={value} onChange={onChange} />
      </Grid>
    </Grid>
  );
};

export default CommonInput;