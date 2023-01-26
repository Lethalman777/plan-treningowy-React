import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {User, UserType} from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import FormInput from './FormInput';
import { DayWorkout, DayWorkoutType } from '../classes/dayWorkout';
import PlanWorkout from './PlanWorkout';
import { JsxElement } from 'typescript';
import { Day } from '../classes/day';
import { ScheduleType } from '../classes/schedule';
import SelectEx from './SelectEx';
import DayInfo from './DayInfo';

type Props = {
    isEdit:boolean
    setIsEdit:React.Dispatch<React.SetStateAction<boolean>>
}

const EditButton = (props:Props) => {

  const editHandler = ()=>{
    props.setIsEdit(!props.isEdit)
  }

  if(props.isEdit){
    return (
        <section className="dayBox">
          <button className="dayButton" type="submit" onClick={()=>{
            editHandler()
          }}>Zakończ Edycję</button>
        </section>
      );
  }
  else{
    return (
        <section className="dayBox">
          <button className="dayButton" type="submit" onClick={()=>{
            editHandler()
          }}>Edytuj</button>
        </section>
      );
  } 
}

export default EditButton;
