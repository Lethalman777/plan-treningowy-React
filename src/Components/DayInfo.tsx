import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {User, UserType} from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import FormInput from './FormInput';
import { DayWorkout, DayWorkoutType } from '../classes/dayWorkout';
import { WorkoutType } from '../classes/workout'
import { ScheduleType } from '../classes/schedule';
import { UserService } from '../classes/UserService';
import { Day } from '../classes/day';

type Props = {
    day:Day
}



const DayInfo = (props:Props) => {
  
  return (
      <div>
        <div>{props.day.Name}</div>
        <div>{props.day.Date}</div>
      </div>     
  );
}

export default DayInfo;