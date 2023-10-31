import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Slices/CardSlices';
import AppContextProvider from './useContext/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Provider store={store}>
  <AppContextProvider>
  <App />
  </AppContextProvider>

 
  </Provider>
  
    
  </BrowserRouter>
);

