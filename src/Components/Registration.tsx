import React, { useEffect, useState } from 'react';
import UserDetail from './UserDetail';
import { User, UserType, UserRegistration } from '../classes/user';
import { LoginAccount, LoginAccountType } from '../classes/loginAccount';
import './App.css';
import axios, { Axios } from 'axios';
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
  confirmPassword: string;
  name: string;
  age: number;
  weight: number;
  height: number;
  gender: string;
}

const Registration = (props:Props) => {
 
 const [user, setUser]=useState<UserType>({index_nr:1,name:"",age:0,weight:0,height:0,gender:""})
 const [login, setLogin]=useState<LoginAccountType>({login:"",password:"",confirmPassword:"",index_nr:1})
 const [indexes, setIndexes]=useState<number[]>([])
 const navigate = useNavigate()
 let index:number = 1
 //const navigate = useNavigate()

 useEffect(() => {
 UserService.getIndexes(indexes)
},[]);

  // const handleSubmit = async (e:any)=>{
  //   e.preventDefault()
  //   console.log(indexes)
  //   while(indexes.includes(index)){
  //     index++
  //   }
  //   // setUser({...user, index_nr:index})
  //   // setLogin({...login, index_nr:index})
  //   console.log(user)
  //   UserService.addAccount(index, login)
  //   UserService.addUser(index, user)
  //   navigate('/UserDetail/'+index)
  // }
  
  const validationSchema = Yup.object().shape({
    login: Yup.string()
          .required("Podaj login")
          .min(4, 'Login powinien składać się z min 4 liter')
          .max(15, 'Login powinien składać się z max 15 liter'),
    password: Yup.string()
          .required("Podaj hasło")
          .min(6, 'Hasło powinno składać się z min 6 znków'),
    confirmPassword: Yup.string()
          .required('Podaj ponownie hasło')
          .oneOf([Yup.ref('password'), null], 'Hasła sie nie zgadzają'),
    name: Yup.string().required('Podaj imię'),
    age: Yup.number()
          .required('Podaj wiek')
          .positive('Wiek musi być większy od 0')
          .integer(),
    weight: Yup.number()
            .required('Podaj wagę')
            .positive('Waga musi być większa od 0'),
    height: Yup.number()
            .required('Podaj wzrost')
            .positive('Wzrost musi być większa od 0'),
    gender: Yup.string()
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
    console.log(indexes)
    while(indexes.includes(index)){
      index++
    }
    // setUser({...user, index_nr:index})
    // setLogin({...login, index_nr:index})
    console.log(user)
    UserService.addAccount(index, login)
    UserService.addUser(index, user)
    navigate('/UserDetail/'+index)
  };

  const changeHandler =(e:any) =>{
    const {name, value} = e.target;
    setLogin({...login, [name]:value});
    setUser({...user, [name]:value});
  }

  return (
    <div className="App">
    <section className="registerBox">
  <div>
    <h1>Rejestracja</h1>
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
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.password?.message}</div>
    <label>Powtórz hasło:</label>
    <input
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
    <label>Imię:</label>
    <input
            type="text"
            {...register('name')}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.name?.message}</div>
    <label>Wiek:</label>
    <input
            type="text"
            {...register('age')}
            className={`form-control ${errors.age ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.age?.message}</div>
    <label>Waga:</label>
    <input
            type="text"
            {...register('weight')}
            className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.weight?.message}</div>

    <label>Wzrost:</label>
    <input
            type="text"
            {...register('height')}
            className={`form-control ${errors.height ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.height?.message}</div>

    <label>Płeć:</label>
    <input
            type="text"
            {...register('gender')}
            className={`form-control ${errors.gender ? 'is-invalid' : ''}`}
            onChange={(e)=>{changeHandler(e)}}
          />
    <div className="invalid-feedback">{errors.gender?.message}</div>

    {/* <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Login'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='password' inputHeader='Password'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='password' inputHeader='Confirm Password'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Imie'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wiek'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Waga'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wzrost'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Płeć'/> */}
    <tr>
        <button className="registerButton" type="submit">Zarejestruj się</button>
        <button className="backButton" onClick={()=>{navigate('/Login')}}>Powrót</button>
      </tr>
    </form>
    </div>
    </section>
    </div>
  );
}

export default Registration;