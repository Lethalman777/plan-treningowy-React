import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {User, UserType} from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import { UserService } from '../classes/UserService';
import { Workout, WorkoutType } from '../classes/workout';

type Props = {
    
}

const UserDetail = (props:Props) => {
  const [user,setUser]=useState<UserType>({index_nr:1,name:"",age:0,weight:0,height:0,gender:""})
  const [pending, setPending] = useState(false)
  const navigate = useNavigate()
  const { number } = useParams()
  
  useEffect(() => {
    setPending(true)  
    UserService.getUser(Number(number), setUser)
  },[]);
  return (
    <div className="UserDetail">
     <section className="detailsBox">
  <section className="details">
    <div >
      <h1>Informację o Tobie</h1>
      <h2><b>Imię:</b>{ user.name }  <b>Wiek:</b>{user.age}  <b>Waga:</b>{user.weight}  <b>Wzrost:</b>{user.height}  <b>Płeć:</b>{user.gender}</h2>
    </div>
  </section>
  {/* <section style="margin-top: 50px; display:flex;"> */}
    <button  className="editButton" onClick={()=>navigate('/UserEdit/'+String(number))}>Edytuj dane</button>
    <button  className="deleteButton" onClick={()=>{
      UserService.deleteUser(Number(number))
      UserService.deleteAccount(Number(number))
      navigate('/Login')
    }}>Usuń konto</button>
    <button  className="planButton" onClick={()=>navigate('/Plan')}>Zajrzyj do plany</button>
  </section>
{/* </section> */}
    </div>
  );
}

export default UserDetail;
