import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './assets/sass/style.scss';
import { ApiLinkProvider } from './context/ApiLinkContext';
import App from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiLinkProvider>
      <App />
    </ApiLinkProvider>
  </React.StrictMode>,
)
