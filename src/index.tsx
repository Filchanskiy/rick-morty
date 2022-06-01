import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage/MainPage';
import PersonPage from './PersonPage/PersonPage';
import LocationPage from './LocationPage/LocationPage';
import EpisodePage from './EpisodePage/EpisodePage';
import NotFoundInfoPage from './NotFoundInfoPage/NotFoundInfoPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:id" element={<PersonPage />} />
        <Route path="/location/:id" element={<LocationPage />} />
        <Route path="/episode/:id" element={<EpisodePage />} />
        <Route path="*" element={<NotFoundInfoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
