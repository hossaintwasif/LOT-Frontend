import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './pages/Authentication/redux/store'; // Import store directly, assuming you have the correct path
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    
    <BrowserRouter>
       <App />
    </BrowserRouter>
    
  </Provider>,
  document.getElementById('root')
);
