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
import FormInput from './FormInput';
import { UserService } from '../classes/UserService';

type Props={
    
}

const Login = (props:Props) => {
 const [user, setUser]=useState<UserType>({index_nr:1,name:"",age:0,weight:0,height:0,gender:""})
 const [login, setLogin]=useState<LoginAccountType>({login:"",password:"",confirmPassword:"",index_nr:1})
 const [pending, setPending] = useState(false)
 const [accounts, setAccounts]= useState<LoginAccount[]>([])
 const navigate = useNavigate()
 useEffect(() => {
  setPending(true)
  UserService.getAccounts(accounts)
},[]);
const handleSubmit= async (e:any)=>{
  e.preventDefault()
  accounts.forEach(element => {
    if(element.Login==login.login&&element.Password==login.password){
      console.log(login.login +"  "+login.password)      
      navigate('/UserDetail/'+element.Index_nr)
    }
  });
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
    <form onSubmit={handleSubmit}>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='text' inputHeader='Login'/>
    <FormInput user={user} setUser={setUser} login={login} setLogin={setLogin} inputType='password' inputHeader='Password'/>
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
