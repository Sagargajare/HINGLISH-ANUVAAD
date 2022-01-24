import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./theme/globalStyles";
import ThemeConfig from "./theme/index";
import Routes from './Routes';
ReactDOM.render(
  <React.StrictMode>
    
      <ThemeConfig>
        <GlobalStyles/>
        <Routes/>
      </ThemeConfig>
  
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
