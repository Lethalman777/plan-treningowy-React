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
    DayWorkout:DayWorkoutType,
    day:Day
    isEdit:boolean
    currentWeek:number
}

const PlanDay = (props:Props) => {
    // const [isEdit, setIsEdit] = useState<boolean>(false)
    let DayWorkouts:DayWorkoutType[]
    let workouts:JSX.Element[]=[] 
    let i : number = 10 
    props.DayWorkout.workouts.forEach(element => {
        workouts.push(<PlanWorkout key={props.DayWorkout.workouts.indexOf(element)+10} currentWeek={props.currentWeek} isEdit={props.isEdit} date={props.day.Date} workout={element}/>)
    });
    workouts.map(post=><li>key={post}</li>)
  const editHandler = ()=>{
    // setIsEdit(true)
  }
  if(props.isEdit){
    return (
      <section className="dayBox">
        <DayInfo day={props.day}/>
        <section className="cwiczenieBox">
          {workouts}
        </section>     
        <SelectEx date={props.day.Date} currentWeek={props.currentWeek}/>
      </section>
    );
  }
  else{
    return (
      <section className="dayBox">
        <DayInfo day={props.day}/>
        <section className="cwiczenieBox">
          {workouts}
        </section>     
      </section>
    );
  }
  
}

export default PlanDay;
