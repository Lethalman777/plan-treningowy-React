import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import UserDetail from './UserDetail';
import { User, UserRegistration, UserType } from '../classes/user';
import { LoginAccount, LoginAccountType } from '../classes/loginAccount';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import App from './App';
import './styles.css';
import { text } from 'stream/consumers';

type Props={
    user:UserType,
    setUser:React.Dispatch<React.SetStateAction<UserType>>
    login:LoginAccountType,
    setLogin:React.Dispatch<React.SetStateAction<LoginAccountType>>
    inputType:string
    inputHeader:string
}

const FormInput = (props:Props) => {
 
  const changeHandler = (e:any) =>{
    switch(props.inputHeader){
      case "Imie":
        props.setUser({...props.user, name:e.target.value})
        break;
        case "Login":
          props.setLogin({...props.login, login:e.target.value})
          break;
          case "Password":
        props.setLogin({...props.login, password:e.target.value})
        break;
        case "Confirm Password":
        props.setLogin({...props.login, confirmPassword:e.target.value})
        break;
        case "Wiek":
        props.setUser({...props.user, age:e.target.value})
        break;
        case "Waga":
        props.setUser({...props.user, weight:e.target.value})
        break;
        case "Wzrost":
        props.setUser({...props.user, height:e.target.value})
        break;
        case "Płeć":
        props.setUser({...props.user, gender:e.target.value})
        break;
    }
  }

  const valueHandler = ()=>{
    switch(props.inputHeader){
      case "Imie":
        return props.user.name
        case "Login":
          return props.login.login
          case "Password":
            return props.login.password
        case "Confirm Password":
          return props.login.confirmPassword
        case "Wiek":
          return props.user.age
        case "Waga":
          return props.user.weight
        case "Wzrost":
          return props.user.height
        case "Płeć":
          return props.user.gender
    }
  }

  return (
    <div className="App">
      <tr>
          <div>{props.inputHeader}:</div>
          <input type={props.inputType} id={props.inputHeader}
          onChange={(e)=>{changeHandler(e)}}
          value={valueHandler()}/>      
      </tr>     
    </div>
  );
}

export default FormInput;
