import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { parseId } from '../utils';

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev?: null;
}
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
export interface GetCharactersResponse {
  info: Info;
  results: ResultsEntity[];
}

function Content() {
  const [characters, setCharacters] = useState<ResultsEntity[]>([]);
  axios.get('https://rickandmortyapi.com/api/character').then((res) => {
    const { data } = res;
    setCharacters(data.results);
  });
  // eslint-disable-next-line arrow-body-style
  const renderCharacters = () => {
    return characters.slice(0, 6).map((character) => (
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
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
              <Link
                href={`/character/${character.id}`}
                color="inherit"
                underline="none"
              >
                {character.name}
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                {character.status} - {character.species}
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Link
                href={`/location/${parseId(character.location.url)}`}
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                {character.location.name}
              </Link>
              <Typography color="text.secondary">First seen in:</Typography>
              <Link
                href={`/episode/${parseId(character.origin.url)}`}
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                {character.origin.name}
              </Link>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    ));
  };
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {renderCharacters()}
    </Grid>
  );
}
export default Content;
