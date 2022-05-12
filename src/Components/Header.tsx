import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function Header() {
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
          <Typography
            alignItems="center"
            justifyContent="center"
            flexGrow={1}
            variant="h6"
            component="span"
          >
            Welcome to our page
          </Typography>
          <Stack spacing={2} direction="row">
            <Button variant="text" color="inherit">
              Docs
            </Button>
            <Button variant="text" color="inherit">
              About
            </Button>
            <Button variant="outlined" color="inherit">
              Support us
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;
