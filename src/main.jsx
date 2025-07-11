import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Redux store provider */}
    <Provider store={store}>
      {/* Router wrapper for App */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
