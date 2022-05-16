import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { parseId } from '../utils';

export interface OriginOrLocation {
  name: string;
  url: string;
}
export interface ResultsEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode?: string[] | null;
  url: string;
  created: string;
}

function PersonPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<ResultsEntity>();
  axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
    const { data } = res;
    setCharacter(data);
  });
  if (character === undefined) {
    return <div>loading...</div>;
  }
  // eslint-disable-next-line arrow-body-style
  const renderOfCharacter = () => {
    return (
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
              typography: 'p',
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
                <i>Created in:</i> {character.created.slice(0, 10)}
              </Typography>
              <Typography>---------</Typography>
              <Link
                href={`/location/${parseId(character.location.url)}`}
                color="inherit"
                underline="none"
              >
                <i>Location:</i> {character.location.name}
              </Link>
              <Typography>---------</Typography>
              <Link
                href={`/episode/${parseId(character.origin.url)}`}
                color="inherit"
                underline="none"
              >
                <i>Origin:</i> {character.origin.name}
              </Link>
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
        {renderOfCharacter()}
      </Grid>
      <Footer />
    </Container>
  );
}

export default PersonPage;
