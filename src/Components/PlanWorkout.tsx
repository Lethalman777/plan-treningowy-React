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

type Props = {
    workout:WorkoutType
}

const PlanWorkout = (props:Props) => {
  return (
    <div>
      <section className="workout">
        <div className="name">{props.workout.name}</div>
        <div className="description">{props.workout.description}</div>
      </section>
      if(false){
        <button className="usunCwButton" type="submit" >Usuń</button>
      }            
    </div>
  );
}

export default PlanWorkout;