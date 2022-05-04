import { Container } from '@mui/material';
import React from 'react';
import './MainPage.css';
import Header from './components/Header';
import Content from './components/Content';

function MainPage() {
  return (
    <Container>
      <Header />
      <Content />
    </Container>
  );
}
export default MainPage;
