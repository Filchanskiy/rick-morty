import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/person" color="inherit" underline="none">
                Eli
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                Alive - Human
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Link
                href="/location"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Post-Apocalyptic Earth
              </Link>
              <Typography color="text.secondary">First seen in:</Typography>
              <Link
                href="/episode"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Rickmancing the Stone
              </Link>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/person" color="inherit" underline="none">
                Rick D716-B
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
                Alive - Human
              </Typography>
              <Typography color="text.secondary">
                Last known location:
              </Typography>
              <Link
                href="/location"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                Citadel of Ricks
              </Link>
              <Typography color="text.secondary">First seen in:</Typography>
              <Link
                href="/episode"
                color="inherit"
                underline="none"
                sx={{ mb: 1.5 }}
              >
                The Ricklantis Mixup
              </Link>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/" color="inherit" underline="none">
                Shnoopy Bloopers
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/" color="inherit" underline="none">
                Phoenixperson
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/" color="inherit" underline="none">
                Tony’s Wife
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
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
          <Box
            sx={{ display: 'flex', flexDirection: 'column', typography: 'h6' }}
          >
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Link href="/" color="inherit" underline="none">
                Pizza-person
              </Link>
              <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
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
