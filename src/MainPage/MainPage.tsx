import { Container } from '@mui/material';
import React from 'react';
import './MainPage.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function MainPage() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
export default MainPage;
