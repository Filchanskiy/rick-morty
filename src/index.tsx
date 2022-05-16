import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainPage from './MainPage/MainPage';
import PersonPage from './PersonPage/PersonPage';
import LocationPage from './LocationPage/LocationPage';
import EpisodePage from './EpisodePage/EpisodePage';
import NotFoundInfo from './NotFoundInfo/NotFoundInfo';

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
        <Route path="*" element={<NotFoundInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
