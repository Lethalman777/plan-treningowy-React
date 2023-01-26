import React, { useEffect, useState } from 'react';
import UserDetail from './UserDetail';
import { User, UserRegistration, UserType } from '../classes/user';
import { LoginAccount, LoginAccountType } from '../classes/loginAccount';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import App from './App';
import './styles.css';
import { text } from 'stream/consumers';
import FormInput from './FormInput';
import { UserService } from '../classes/UserService';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type Props={
    
}
type UserSubmitForm ={
  login: string;
  password: string;
}

const Login = (props:Props) => {
 const [login, setLogin]=useState<LoginAccountType>({login:"",password:"",confirmPassword:"",index_nr:1})
 const [accounts, setAccounts]= useState<LoginAccount[]>([])
 const navigate = useNavigate()
 useEffect(() => {
  UserService.getAccounts(accounts)
},[]);

// const handleSubmit= async (e:any)=>{
//   e.preventDefault()
//   accounts.forEach(element => {
//     if(element.Login==login.login&&element.Password==login.password){
//       console.log(login.login +"  "+login.password)      
//       navigate('/UserDetail/'+element.Index_nr)
//     }
//   });
// }

const validationSchema = Yup.object().shape({
  login: Yup.string().required('Podaj login'),
  password: Yup.string().required('Podaj hasło')
})

const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data, null, 2));
    accounts.forEach(element => {
    if(element.Login==login.login&&element.Password==login.password){
      console.log(login.login +"  "+login.password)      
      navigate('/UserDetail/'+element.Index_nr)
    }
  });
  };

  const changeHandler =(e:any) =>{
    const {name, value} = e.target;
    setLogin({...login, [name]:value});
  }

  return (
    <div className="App">
     <p 
      //style="text-align: center;  font-size: 24px; color: white; font-weight: bold; text-align: center"
     >
  Witamy na naszej stronie
</p>
<section 
 className="loginBox"
>
  <div>
    <h1>Logowanie</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
    <label>Login:</label>
    <input
            type="text"
            {...register('login')}
            className={`form-control ${errors.login ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.login?.message}</div>

    <label>Hasło:</label>
    <input
            type="text"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.password?.message}</div>
    {/* <FormInput type={'text'} value={login.login} onChange={(e)=>{setLogin({...login, login:e.target.value})}} id={'Login'} inputHeader='Login'/>
    <FormInput type={'password'} value={login.password} onChange={(e)=>{setLogin({...login, password:e.target.value})}}  inputHeader='Password'/> */}
    <tr>
      <button
         className="logginButton"type="submit">
        Zaloguj się
      </button>

      <button 
       className="registerButton" onClick={()=>{navigate('/Registration')}}>
        Zarejestruj się
      </button>
      <h6 style={{color: "white"}}>Nie masz jeszcze konta? Zarejestruj się!</h6>
    </tr>
    </form>
  </div>
</section>

    </div>
  );
}

export default Login;
