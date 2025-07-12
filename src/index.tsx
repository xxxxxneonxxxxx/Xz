import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import Banner from "./component/banner/Banner";
import reportWebVitals from './reportWebVitals';
import MainDirections from "./component/mainDirections /MainDirections";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Banner/>
      <MainDirections/>
  </React.StrictMode>
);

reportWebVitals();
