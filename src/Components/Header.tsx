import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Stack,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const theme = createTheme({
  palette: {
    primary: {
      light: grey[100],
      main: grey[900],
      dark: grey[900],
    },
    secondary: {
      light: blue[400],
      main: blue[200],
      dark: blue[400],
    },
  },
});

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            href="/"
            size="small"
            edge="start"
            color="secondary"
            aria-label="home"
          >
            <HomeIcon />
          </IconButton>
          <Typography
            alignItems="center"
            justifyContent="center"
            marginX="auto"
            variant="h6"
            component="span"
            color="secondary"
          >
            Welcome to the Rick and Morty page
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              color="secondary"
              href="https://rickandmortyapi.com/documentation"
            >
              Docs
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
export default Header;
