import React from 'react';
import logo from './logo.svg';
import UserDetail from './UserDetail';
import { User, UserType } from '../classes/user';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { LoginAccount } from '../classes/loginAccount';

export interface ILayoutComponentProps {

}

const LayoutComponent:React.FunctionComponent<ILayoutComponentProps> = (props) => {
  return (
   <div>
    <Outlet/>
   </div>
  );
}

export default LayoutComponent;
