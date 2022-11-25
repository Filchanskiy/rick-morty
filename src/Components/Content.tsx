import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Pagination,
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
        <Card
          sx={{
            backgroundColor: '#616161',
            display: 'flex',
            border: 4,
            borderColor: 'Black',
          }}
        >
          <CardMedia
            component="img"
            sx={{ borderRight: 4, width: 200 }}
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
                color="skyblue"
                underline="hover"
              >
                {character.name}
              </Link>
              <Typography
                variant="h6"
                component="div"
                sx={{ mb: 1.5 }}
                color="skyblue"
              >
                {character.status} - {character.species}
              </Typography>
              <Typography color="skyblue">Last known location:</Typography>
              <Link
                href={`/location/${parseId(character.location.url)}`}
                color="skyblue"
                underline="hover"
              >
                {character.location.name}
              </Link>
              <Typography color="skyblue" sx={{ mt: 2 }}>
                First seen in:
              </Typography>
              <Link
                href={`/episode/${parseId(character.origin.url)}`}
                color="skyblue"
                underline="hover"
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
    <Box sx={{ backgroundColor: '#37474f', mt: 3 }}>
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ pt: 1, pb: 2, px: 15 }}
      >
        {renderCharacters()}
      </Grid>
      <Box>
        <Pagination
          color="primary"
          variant="text"
          sx={{
            color: 'skyblue',
          }}
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}
          showFirstButton
          showLastButton
          renderItem={(item) => (
            <PaginationItem
              component={NavLink}
              to={`/?page=${item.page}`}
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...item}
            />
          )}
        />
      </Box>
    </Box>
  );
}
export default Content;
