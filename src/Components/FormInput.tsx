import React, { FC, useEffect, useState } from 'react';
import logo from './logo.svg';
import UserDetail from './UserDetail';
import { User, UserRegistration, UserType } from '../classes/user';
import { LoginAccount, LoginAccountType } from '../classes/loginAccount';
import './App.css';
import axios from 'axios';
import { Path, useNavigate } from 'react-router-dom';
import App from './App';
import './styles.css';
import { text } from 'stream/consumers';
import PropTypes, { string } from "prop-types";
import { FieldErrorsImpl, FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form/dist/types';
import { Input, InputProps } from 'reactstrap';
import { Interface } from 'readline';
import { isRegularExpressionLiteral } from 'typescript';


type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    inputHeader:string,
}

const FormInput = (props:Props) => {
  
  return (
    <div className="App">
      <tr>
          <div>{props.inputHeader}:</div>
          <input {...props}/>  
      </tr>     
    </div>
  );
}

FormInput.propTypes = {
login: PropTypes.any.isRequired,
password: PropTypes.any.isRequired
}


export default FormInput;
