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

type Props = {
    DayWorkout:DayWorkoutType,
    day:Day
    // setSchedule:React.Dispatch<React.SetStateAction<ScheduleType>>
}

const PlanDay = (props:Props) => {
    // const [isEdit, setIsEdit] = useState<boolean>(false)
    let DayWorkouts:DayWorkoutType[]
    let workouts:JSX.Element[]=[]
    props.DayWorkout.workouts.forEach(element => {
        workouts.push(<PlanWorkout workout={element}/>)
    });
  const editHandler = ()=>{
    // setIsEdit(true)
  }
  return (
    <section className="dayBox">
      <div>{props.day.Name}</div>
      <div>{props.day.Date}</div>
      <section className="cwiczenieBox">
        {workouts}
      </section>
      
      {/* <SelectEx selectList={}/> */}
      <button className="dayButton" type="submit" onClick={()=>{
        editHandler()
      }}>Edytuj</button>

    </section>
  );
}

export default PlanDay;
