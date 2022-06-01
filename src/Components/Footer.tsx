import { Grid, Typography, Box } from '@mui/material';
import React from 'react';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';

// const theme = createTheme({
//   palette: {
//     secondary: {
//       main: grey[800],
//       dark: grey[800],
//       light: grey[800],
//     },
//   },
// });

function Footer() {
  return (
    <Box sx={{ bgcolor: 'black', py: 5 }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Typography sx={{ color: 'skyblue' }} variant="h6" component="p">
            by Pavel Filchenkov 2022
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Footer;
