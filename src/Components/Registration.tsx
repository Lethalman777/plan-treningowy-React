import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
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


type Props={
    
}

const Registration = (props:Props) => {
 
 const [user, setUser]=useState<UserType>({index_nr:1,name:"",age:0,weight:0,height:0,gender:""})
 const [login, setLogin]=useState<LoginAccountType>({login:"",password:"",confirmPassword:"",index_nr:1})
 const [indexes, setIndexes]=useState<number[]>([])
 const [pending, setPending] = useState(false) 
 const navigate = useNavigate()
 let index:number = 1
 //const navigate = useNavigate()

 useEffect(() => {
  setPending(true)
  axios.get('http://localhost:7777/users').then(response => {
            var data = response.data;
            data.forEach((element: { login: string; password: string; index_nr: number; }) => {
              setPending(false)
              indexes.push(Number(element.index_nr))
            });
          });
},[]);

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    console.log(indexes)
    while(indexes.includes(index)){
      index++
    }
    //setUser({...user, index_nr:index})
    console.log(user)
    axios.post('http://localhost:7777/accounts', {login:login.login, password:login.password, index_nr:index}).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    axios.post('http://localhost:7777/users', {index_nr:index, name:user.name, age:user.age, weight:user.weight, height:user.height, gender:user.gender}).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    navigate('/UserDetail/'+index)
  }

  return (
    <div className="App">
    <section className="registerBox">
  <div>
    <h1>Rejestracja</h1>
    <form onSubmit={handleSubmit}>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Login'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='password' inputHeader='Password'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='password' inputHeader='Confirm Password'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Imie'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wiek'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Waga'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wzrost'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Płeć'/>
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