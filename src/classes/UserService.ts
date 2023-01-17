import axios from "axios";
import React from "react";
import { Day } from "./day";
import { LoginAccount, LoginAccountType } from "./loginAccount";
import { Schedule, ScheduleType } from "./schedule";
import { UserType } from "./user";

export class UserService{

    public static getUser(number:number, setUser:React.Dispatch<React.SetStateAction<UserType>>){
        axios.get('http://localhost:7777/users/' + String(number)).then(response => {
      var data = response.data;
      setUser({index_nr:Number(number), name:data.name, age:data.age, weight:data.weight, height:data.height, gender:data.gender});
    });
    }

    public static getAccount(number:number, setLogin:React.Dispatch<React.SetStateAction<LoginAccountType>>){
        axios.get('http://localhost:7777/accounts/' + String(number)).then(response => {
      var data = response.data;
      setLogin({index_nr:Number(number), login:data.login, password:data.password, confirmPassword:data.confirmPassword});
    });
    }

    public static getPlan(setSchedule:React.Dispatch<React.SetStateAction<ScheduleType>>){
        axios.get('http://localhost:7777/schedule/48').then(response => {
          var data = response.data;
          setSchedule(data)
        });
    }

    public static getIndexes(indexes:number[]){
        axios.get('http://localhost:7777/users').then(response => {
            var data = response.data;
            data.forEach((element: { login: string; password: string; index_nr: number; }) => {
              indexes.push(Number(element.index_nr))
            });
          });
    }

    public static addUser(index_nr:number, user:UserType){
        axios.post('http://localhost:7777/users', {index_nr:index_nr, name:user.name, age:user.age, weight:user.weight, height:user.height, gender:user.gender}).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

    public static editUser(user:UserType){
        axios.put('http://localhost:7777/users', user, 
    {headers: {
      'Content-Type': 'application/json'
    }}).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }

    public static addAccount(index_nr:number, login:LoginAccountType){
        axios.post('http://localhost:7777/accounts', {login:login.login, password:login.password, index_nr:index_nr}).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    }

    public static getAccounts(accounts:LoginAccount[]){
        axios.get('http://localhost:7777/accounts').then(response => {
            var data = response.data;
            data.forEach((element: { login: string; password: string; index_nr: number; }) => {
              accounts.push(new LoginAccount(element.login,element.password,element.index_nr))
            });
          });
    }

    public static deleteUser(number:number){
        axios.delete('http://localhost:7777/users/' + String(number))     
    }

    public static deleteAccount(number:number){
        axios.delete('http://localhost:7777/accounts/' + String(number))
    }
}