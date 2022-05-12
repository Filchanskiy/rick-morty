import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function PersonPage() {
  const character = JSON.parse(
    '{"id":288,"name":"Rick D716-B","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (D716-B)","url":"https://rickandmortyapi.com/api/location/60"},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/288.jpeg","episode":["https://rickandmortyapi.com/api/episode/28"],"url":"https://rickandmortyapi.com/api/character/288","created":"2017-12-31T19:55:25.101Z"}',
  );
  return (
    <Container>
      <Header />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: 10 }}
      >
        <Grid item xs={12} md={8}>
          <Card sx={{ display: 'flex' }}>
            <CardMedia
              component="img"
              sx={{ width: 450 }}
              image={character.image}
              alt={character.name}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                typography: 'h6',
              }}
            >
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography>
                  <i>Сharacter `s name:</i> {character.name}
                </Typography>
                <Typography>
                  <i>Status:</i> {character.status}
                </Typography>
                <Typography>
                  <i>Species:</i> {character.species}
                </Typography>
                <Typography>
                  <i>Gender:</i> {character.gender}
                </Typography>
                <Typography>
                  <i>Origin:</i> {character.origin.name}
                </Typography>
                <Typography>
                  <i>Location:</i> {character.location.name}
                </Typography>
                <Typography>
                  <i>Created in:</i> {character.created.slice(0, 10)}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}

export default PersonPage;
