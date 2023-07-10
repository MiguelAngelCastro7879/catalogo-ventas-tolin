import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import 'noty/lib/noty.css';
import 'noty/lib/themes/metroui.css';


const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
    const token = localStorage.getItem('token');
    let headers = {}
    if(token){
      headers = {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
      };
    }else{
      headers = {
          'Content-Type': 'application/json',
      };
    }
    let [resource, config ] = args;

    const response = await originalFetch(resource, { ...config, headers });
    
    return response;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
