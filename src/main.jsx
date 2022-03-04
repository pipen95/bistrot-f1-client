import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';
// import App from './App';
import AppStyle from './AppStyle';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
        {/* <App /> */}
        <AppStyle />

      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
