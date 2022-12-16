import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {User, UserType} from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

type Props = {
    
}

const UserDetail = (props:Props) => {
  const [user,setUser]=useState<User>(new User(1,"",1,1,1,""))
  const [pending, setPending] = useState(false)
  const navigate = useNavigate()
  const { number } = useParams()
  useEffect(() => {
    setPending(true)
    axios.get('http://localhost:7777/users/' + String(number)).then(response => {
      var data = response.data;
      setPending(false)
      setUser(new User(data.index_nr, data.name, data.age, data.weight, data.height, data.gender));
    });
  },[]);
  return (
    <div className="UserDetail">
     <section className="detailsBox">
  <section className="details">
    <div >
      <h1>Informację o Tobie</h1>
      <h2><b>Imię:</b>{ user.Name }  <b>Wiek:</b>{user.Age}  <b>Waga:</b>{user.Weight}  <b>Wzrost:</b>{user.Height}  <b>Płeć:</b>{user.Gender}</h2>
    </div>
  </section>
  {/* <section style="margin-top: 50px; display:flex;"> */}
    <button  className="editButton" onClick={()=>navigate('/UserEdit/'+String(number))}>Edytuj dane</button>
    <button  className="deleteButton" onClick={()=>{
      axios.delete('http://localhost:7777/users/' + String(number))
      axios.delete('http://localhost:7777/accounts/' + String(number))
      navigate('/Login')
    }}>Usuń konto</button>
    <button  className="planButton" >Zajrzyj do plany</button>
  </section>
{/* </section> */}
    </div>
  );
}

export default UserDetail;
