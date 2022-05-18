import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function NotFoundInfo() {
  return (
    <Container>
      <Header />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        pt={10}
      >
        <Grid>
          <Typography>
            <h2>Sorry, there is no information</h2>
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
export default NotFoundInfo;
