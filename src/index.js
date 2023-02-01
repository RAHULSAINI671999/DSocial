import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContext } from './context/darkModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <DarkModeContext.Provider>
  <AuthContextProvider>
  <App />
  </AuthContextProvider>
  </DarkModeContext.Provider>
  </React.StrictMode>
);
