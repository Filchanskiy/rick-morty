import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents?: string[] | null;
  url: string;
  created: string;
}

function LocationPage() {
  const { id } = useParams();
  const [location, setLocation] = useState<Location>();
  axios.get(`https://rickandmortyapi.com/api/location/${id}`).then((res) => {
    const { data } = res;
    setLocation(data);
  });
  if (location === undefined) {
    return <div>loading...</div>;
  }
  // eslint-disable-next-line arrow-body-style
  const renderOfLocation = () => {
    return (
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            border: 4,
            borderColor: 'black',
            bgcolor: '#616161',
            display: 'flex',
            color: 'skyblue',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              typography: 'h6',
            }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography sx={{ mb: 1 }}>
                <i>Location name:</i> {location.name}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                <i>Type:</i> {location.type}
              </Typography>
              <Typography sx={{ mb: 1 }}>
                <i>Dimension:</i> {location.dimension}
              </Typography>
              <Typography>
                <i>Created:</i> {location.created.slice(0, 10)}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    );
  };
  return (
    <>
      <Header />
      <Grid
        container
        rowSpacing={1}
        alignItems="center"
        justifyContent="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ bgcolor: '#37474f', pt: 10, pb: 3, px: 50 }}
      >
        {renderOfLocation()}
      </Grid>
      <Footer />
    </>
  );
}
export default LocationPage;
