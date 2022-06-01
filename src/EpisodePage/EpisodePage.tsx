import React, { useState } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
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
        <Card
          sx={{
            border: 2,
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
    <>
      <Header />
      <Grid
        container
        rowSpacing={1}
        alignItems="center"
        justifyContent="center"
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ bgcolor: '#212121', pt: 10, pb: 3, px: 50 }}
      >
        {renderOfEpisode()}
      </Grid>
      <Footer />
    </>
  );
}
export default EpisodePage;
