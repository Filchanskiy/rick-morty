import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function MainPage() {
  return (
    <Container>
      <Header />
      <Box>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          pt={20}
          pb={10}
        >
          <Grid item xs={3}>
            <Typography variant="h1" component="span">
              The Rick and Morty API
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Content />
      <Footer />
    </Container>
  );
}
export default MainPage;
