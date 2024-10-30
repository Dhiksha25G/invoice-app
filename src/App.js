// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './Components/AppComponent';
import { CssBaseline } from '@mui/material';

// Import Material-UI CSS baseline for consistent styling across browsers
function App() {
  return (
    <>
      <CssBaseline /> {/* Ensures Material-UI styling across the app */}
      <AppComponent />
    </>
  );
}

export default App;
