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
import { UserService } from '../classes/UserService';
import { date } from 'yup';
import { propTypes } from 'react-bootstrap/esm/Image';

type Props = {
    currentWeek:number
    date : string
}

const SelectEx = (props:Props) => {
    let selectValue : string = "option"
    const [schedule, setSchedule] = useState<ScheduleType>({index_nr:1,weekNumber:1,userName:"",listOfDayWorkouts:[]})
    const [selectList, setSelectList] = useState<WorkoutType[]>([])
    
    useEffect(()=>{    
        UserService.getPlan(props.currentWeek, setSchedule) 
        UserService.getWorkouts(selectList, setSelectList)  
    }, [schedule.index_nr])   


    const handleChange = (e : any) =>{ 
        console.log(e.target.value) 
        let workout:WorkoutType={index_nr:0, name:"", description:""}
        selectList.forEach(element => {
            if(element.index_nr == e.target.value){  
                workout=element 
            }
        });
        schedule.listOfDayWorkouts.find((u)=>u.date==props.date)?.workouts.push(workout)
        console.log(schedule)
        UserService.editSchedule(schedule)
    }

    return (   
        <section>
            <select value={selectValue} onChange={(e)=>{handleChange(e)}}>
                {selectList.map((value) => (
                    <option value={value.index_nr} key={value.index_nr}>
                        {value.name}
                    </option>
                ))}
            </select>
        </section>
    );       
}

export default SelectEx;
