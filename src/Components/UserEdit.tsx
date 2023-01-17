import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import UserDetail from './UserDetail';
import { User, UserType, UserRegistration } from '../classes/user';
import { LoginAccount, LoginAccountType } from '../classes/loginAccount';
import './App.css';
import axios, { Axios } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import App from './App';
import './styles.css';
import { text } from 'stream/consumers';
import FormInput from './FormInput';
import { UserService } from '../classes/UserService';


type Props={
    
}

const UserEdit = (props:Props) => {
    const [user, setUser]=useState<UserType>({index_nr:1,name:"",age:0,weight:0,height:0,gender:""})
 const [login, setLogin]=useState<LoginAccountType>({login:"",password:"",confirmPassword:"",index_nr:1})
 const [pending, setPending] = useState(false) 
 const {number} = useParams()
 const navigate = useNavigate()
 //const navigate = useNavigate()

 useEffect(() => {
    setPending(true)   
      setPending(false)
      UserService.getUser(Number(number), setUser)
  },[]);

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    UserService.editUser(user)
    navigate('/UserDetail/'+String(number))
  }

  return (
    <div className="App">
    <section className="editBox">
    <h1>Edit</h1>
    <form onSubmit={handleSubmit}>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Imie'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wiek'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Waga'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='number' inputHeader='Wzrost'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Płeć'/>
    <br/>
    <button type="submit">Zaktualizuj</button>
    </form>
    </section>
    </div>
  );
}

export default UserEdit;