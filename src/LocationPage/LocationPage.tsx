import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';
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
        <Card sx={{ display: 'flex' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              typography: 'h6',
            }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography>
                <i>Location name:</i> {location.name}
              </Typography>
              <Typography>
                <i>Type:</i> {location.type}
              </Typography>
              <Typography>
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
    <Container>
      <Header />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: 10 }}
      >
        {renderOfLocation()}
      </Grid>
      <Footer />
    </Container>
  );
}
export default LocationPage;
