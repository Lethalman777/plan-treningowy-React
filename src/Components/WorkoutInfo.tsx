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

type Props = {
    workout:WorkoutType
}



const WorkoutInfo = (props:Props) => {
  
  return (
      <section className="workout">
        <div className="name">{props.workout.name}</div>
        <div className="description">{props.workout.description}</div>
      </section>         
  );
}

export default WorkoutInfo;