import { Grid, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={10}
      mb={5}
    >
      <Grid item xs={3}>
        <Typography variant="h6" component="p">
          by Pavel Filchenkov 2022
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Footer;
