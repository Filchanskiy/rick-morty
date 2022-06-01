/* eslint-disable react/jsx-wrap-multilines */
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
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
  episode: string[];
  url: string;
  created: string;
}

function PersonPage() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const { id } = useParams();
  const [character, setCharacter] = useState<ResultsEntity>();
  const [episodes, setEpisodes] = useState([]);
  axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
    const { data } = res;
    setCharacter(data);
    setEpisodes(data.episode);
  });
  if (character === undefined) {
    return <div>loading...</div>;
  }
  const renderEpisodes = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    episodes.slice(0, 5).map((episode) => (
      <List>
        <Link
          href={`/episode/${parseId(episode)}`}
          color="skyblue"
          underline="none"
        >
          <i>Episode № {parseId(episode)}</i>
        </Link>
      </List>
    ));
  // eslint-disable-next-line arrow-body-style
  const renderOfCharacter = () => {
    return (
      <Grid item xs={12} md={8}>
        <Card
          sx={{
            border: 2,
            bgcolor: '#616161',
            display: 'flex',
            color: 'skyblue',
          }}
        >
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
              fontFamily: 'Monospace',
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
              <List
                sx={{
                  width: '100%',
                  maxWidth: 360,
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary="Episodes" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {renderEpisodes()}
                  </List>
                </Collapse>
              </List>
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
        sx={{
          bgcolor: '#212121',
          mt: 8,
          pb: 2,
        }}
      >
        {renderOfCharacter()}
      </Grid>
      <Footer />
    </>
  );
}

export default PersonPage;
