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

export interface Origin {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters?: string[] | null;
  url: string;
  created: string;
}

function EpisodePage() {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Origin>();
  axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((res) => {
    const { data } = res;
    setEpisode(data);
  });
  if (episode === undefined) {
    return <div>loading...</div>;
  }
  // eslint-disable-next-line arrow-body-style
  const renderOfEpisode = () => {
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
                <i>Episode title:</i> {episode.name}
              </Typography>
              <Typography>
                <i>Air date:</i> {episode.air_date}
              </Typography>
              <Typography>
                <i>Episode:</i> {episode.episode}
              </Typography>
              <Typography>
                <i>Created:</i> {episode.created.slice(0, 10)}
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
        {renderOfEpisode()}
      </Grid>
      <Footer />
    </Container>
  );
}
export default EpisodePage;
