import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Grid,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{
              mr: 2,
            }}
          >
            <HomeIcon />
          </IconButton>
          <Button variant="text" color="inherit">
            Docs
          </Button>
          <Button variant="text" color="inherit">
            About
          </Button>
          <Button variant="text" color="inherit">
            SUPPORT US
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Typography variant="h1" component="span">
            The Rick and Morty API
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Header;
