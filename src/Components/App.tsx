import React from 'react';
import logo from './logo.svg';
import UserDetail from './UserDetail';
import { User, UserType } from '../classes/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { LoginAccount } from '../classes/loginAccount';
import LayoutComponent from './Layout';
import Registration from './Registration';
import UserEdit from './UserEdit';

export interface IApplicationProps {

}

const App:React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LayoutComponent/>}>
        <Route index element={<Login />}/>
        <Route path='Login' element={<Login />}/>
        <Route path='Registration' element={<Registration />}/>
        <Route path='UserDetail/:number' element={<UserDetail />}/>
        <Route path='UserEdit/:number' element={<UserEdit />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
