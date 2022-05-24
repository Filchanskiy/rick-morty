import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Pagination,
  Container,
  PaginationItem,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
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

const BASE_URL = 'https://rickandmortyapi.com/api/character';
function Content() {
  const [characters, setCharacters] = useState<ResultsEntity[]>([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  useEffect(() => {
    axios.get(`${BASE_URL}?page=${page}`).then((res) => {
      const { data } = res;
      setCharacters(data.results);
      setPageQty(data.info.pages);
    });
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
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {renderCharacters()}
      </Grid>
      <Pagination
        count={pageQty}
        page={page}
        onChange={(_, num) => setPage(num)}
        showFirstButton
        showLastButton
        sx={{ marginY: 3, marginX: 'auto' }}
        renderItem={(item) => (
          <PaginationItem
            component={NavLink}
            to={`/?page=${item.page}`}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...item}
          />
        )}
      />
    </Container>
  );
}
export default Content;
