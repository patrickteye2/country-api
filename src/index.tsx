import React from 'react';
import { BrowserRouter as Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from './contexts/ThemeContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <ThemeProvider>
  <Routes>
   <App />
   </Routes>
  </ThemeProvider>
  // </React.StrictMode>
);

