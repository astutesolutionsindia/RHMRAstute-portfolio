import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <--- THE ROUTING ENGINE
// This pulls in your main App routing file
import App from './app/App'; 
// This pulls in the exact CSS file
import './styles/index.css'; 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> {/* <--- Wraps the entire app so links work seamlessly */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);