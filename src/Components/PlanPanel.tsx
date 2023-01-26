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
import WeekChange from './WeekChange';
import { time } from './Plan';

type Props = {
    setTime:React.Dispatch<React.SetStateAction<time>>
    time:time
}

const PlanPanel = (props:Props) => { 
    return (
        <section style={{display:"flex"}}>
        <WeekChange setTime={props.setTime} time={props.time} isNext={false}/>
        <button className="nextButton" style={{width:"200px"}} type="submit">Zobacz swoje dane</button>
        <WeekChange setTime={props.setTime} time={props.time} isNext={true}/>
        </section>
    ); 
}

export default PlanPanel;
