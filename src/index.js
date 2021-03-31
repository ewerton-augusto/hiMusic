import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyles from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
    <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false} />
  </React.StrictMode>,
  document.getElementById('root')
);
