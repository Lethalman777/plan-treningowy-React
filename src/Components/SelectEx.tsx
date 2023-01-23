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
import { WorkoutType } from '../classes/workout';
import { ScheduleType } from '../classes/schedule';

type Props = {
    selectList : WorkoutType[]
    setSelect : React.Dispatch<React.SetStateAction<string>>
    setSchedule : React.Dispatch<React.SetStateAction<ScheduleType>>
    schedule : ScheduleType
    date : string
}

const SelectEx = (props:Props) => {
    let selectValue : string = "option"

    const handleChange = (e : any) =>{
        const dayWorkout : DayWorkoutType = {
            date: props.date,
            workouts: props.schedule.listOfDayWorkouts
        }
        props.setSchedule({...props.schedule, })
    }

    return (   
        <section>
            <select value={selectValue} onChange={(e)=>{handleChange(e)}}>
                {props.selectList.map((value) => (
                    <option value={value.name} key={value.index_nr}>
                        {value.name}
                    </option>
                ))}
            </select>
        </section>
    );       
}

export default SelectEx;
