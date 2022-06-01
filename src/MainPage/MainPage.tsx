import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function MainPage() {
  return (
    <>
      <Header />
      <Box bgcolor="black">
        <Box sx={{ display: 'flex' }}>
          <CardMedia
            component="img"
            sx={{ maxWidth: '100%', maxHeight: 550 }}
            image="http://pristor.ru/wp-content/uploads/2018/08/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D1%81%D1%82%D0%BE%D0%BB-%D0%B2-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%BC-%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5-%D0%A0%D0%B8%D0%BA-%D0%B8-%D0%9C%D0%BE%D1%80%D1%82%D0%B8-1.jpeg"
            alt="Rick and Morty"
          />
        </Box>
        <Typography variant="h2" color="skyblue" textAlign="center">
          The Rick and Morty API
        </Typography>
      </Box>
      <Content />
      <Footer />
    </>
  );
}
export default MainPage;
