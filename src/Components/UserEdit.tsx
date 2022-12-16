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
    axios.get('http://localhost:7777/users/' + String(number)).then(response => {
      var data = response.data;
      setPending(false)
      setUser({index_nr:Number(number), name:data.name, age:data.age, weight:data.weight, height:data.height, gender:data.gender});
    });
  },[]);

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
   axios.put('http://localhost:7777/users', user, 
    {headers: {
      'Content-Type': 'application/json'
    }}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
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