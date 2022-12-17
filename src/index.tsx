import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import Login from './Components/Login'
import reportWebVitals from './reportWebVitals';
import { LoginAccount } from './classes/loginAccount';
import { url } from 'inspector';
import UserDetail from './Components/UserDetail';
import LayoutComponent from './Components/Layout';
import Registration from './Components/Registration';
import Plan from './Components/Plan';
import PlanDay from './Components/PlanDay';
import { Day } from './classes/day';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
