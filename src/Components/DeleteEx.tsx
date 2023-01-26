import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css';
import { WorkoutType } from '../classes/workout'
import { ScheduleType } from '../classes/schedule';
import { UserService } from '../classes/UserService';
import ActionButton from './ActionButton';

type Props = {
    workout:WorkoutType
    date:string
    currentWeek:number
}

const DeleteEx = (props:Props) => {
  const [schedule, setSchedule] = useState<ScheduleType>({index_nr:1,weekNumber:1,userName:"",listOfDayWorkouts:[]})

  useEffect(()=>{    
    UserService.getPlan(props.currentWeek, setSchedule) 
  }, [schedule.index_nr]) 


  const deleteEx = ()=>{
    let position: number = Number(
      schedule.listOfDayWorkouts.find(
        (u) => u.date == props.date
      )?.workouts.indexOf(props.workout)
    );
    schedule.listOfDayWorkouts.find((u)=>u.date==props.date)?.workouts.splice(position, 1)
    console.log(schedule)
    UserService.editSchedule(schedule)
  }
  return (
        //<button className="usunCwButton" type="submit" onClick={()=>{deleteEx()}}>Usuń</button>  
        <div>
          <ActionButton isEdit={false} clickHandler={deleteEx} buttonText={'Usuń'} className={"usunCwButton" }/>
        </div>       
  );
}

export default DeleteEx;