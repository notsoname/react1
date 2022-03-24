import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const AppContainer = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<AppContainer />, document.getElementById('root'));
