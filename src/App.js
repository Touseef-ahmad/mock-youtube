import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
// components
import { Routes } from './routes';
// constants
import { THEME } from './styles/theme';

export const App = () => (
  <ThemeProvider theme={THEME}>
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);
