import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

function Content() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/110.jpeg"
            alt="Eli"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Eli
              </Typography>
              <Typography variant="h6" component="div">
                Alive - Human
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>Post-Apocalyptic Earth</Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>Rickmancing the Stone</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/288.jpeg"
            alt="Rick D716-B"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Rick D716-B
              </Typography>
              <Typography variant="h6" component="div">
                Alive - Human
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>Citadel of Ricks</Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>The Ricklantis Mixup</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/320.jpeg"
            alt="Shnoopy Bloopers"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Shnoopy Bloopers
              </Typography>
              <Typography variant="h6" component="div">
                Unknown - Alien
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>Immortality Field Resort</Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>
                The Whirly Dirly Conspiracy
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/592.jpeg"
            alt="Phoenixperson"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Phoenixperson
              </Typography>
              <Typography variant="h6" component="div">
                Dead - Alien
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>
                Earth (Replacement Dimension)
              </Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>
                The Rickshank Rickdemption
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/532.jpeg"
            alt="Tony’s Wife"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Tony’s Wife
              </Typography>
              <Typography variant="h6" component="div">
                Dead - Alien
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>Globaflyn</Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>The Old Man and the Seat</Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ width: 200 }}
            image="https://rickandmortyapi.com/api/character/avatar/425.jpeg"
            alt="Pizza-person"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Pizza-person
              </Typography>
              <Typography variant="h6" component="div">
                Alive - Humanoid
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Typography sx={{ mb: 1.5 }}>Earth (Pizza Dimension)</Typography>
              <Typography color="text.secondary">First seen in:</Typography>
              <Typography sx={{ mb: 1.5 }}>
                Close Rick-counters of the Rick Kind
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Content;
