import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import {User, UserType} from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import { Day } from '../classes/day';
import { DayWorkout, DayWorkoutType } from '../classes/dayWorkout';
import PlanDay from './PlanDay';
import { Schedule, ScheduleType } from '../classes/schedule';

type Props = {
    
}

const Plan = (props:Props) => {
    const [schedule, setSchedule] = useState<ScheduleType>({index_nr:1,weekNumber:1,userName:"",listOfDayWorkouts:[]})
    const [pending, setPending] = useState(false)
    const [days, setDays] = useState<JSX.Element[]>([])
    let currentDate:Date = new Date()
    let week:Day[] = getWeek(currentDate)
    let tablica:number[] = [1,11,1,1,1]

    useEffect(() => {
        setPending(true)
        axios.get('http://localhost:7777/schedule/48').then(response => {
          var data = response.data;
          setPending(false)
          setSchedule(data)
          setDays(getDays(setDays,days,schedule.listOfDayWorkouts,week))
        });
      },[]);
      
      console.log(schedule)
      console.log(days)
  return (
    <div className="UserDetail">
     <h1 
    //  style="text-align:center"
     > Oto twój plan tygodnia </h1>
<section style={{display:"flex"}}>
  <button className="nextButton" style={{width:"200px"}} type="submit">Poprzedni tydzień</button>
  <button className="nextButton" style={{width:"200px"}} type="submit">Zobacz swoje dane</button>
  <button className="nextButton" style={{width:"200px"}} type="submit">Następny tydzień</button> <br/>
</section>
<section className="kalendarz">
{days}
</section>
    </div>
  );
}
const getDays = (setDays:React.Dispatch<React.SetStateAction<JSX.Element[]>>, days:JSX.Element[],dayWorkouts: DayWorkoutType[], week:Day[]) : JSX.Element[] => {
    console.log("hjh")
    week.forEach(day => {
        dayWorkouts.forEach(element => {
            if(element.date==day.Date){
                days.push(<PlanDay DayWorkout={element} day={day}/>) 
            } 
        });
    });
    return days
}
const  getWeek = (currentDate: Date): Day[] => {
    let currentDay: number = currentDate.getDate();
    while (
      currentDate.toLocaleDateString('pl-pl', { weekday: 'long' }) !=
      'poniedziałek'
    ) {
      currentDay--;
      currentDate.setDate(currentDay);
    }

    let week: Day[] = [];
    for (let index = 1; index <= 7; index++) {
      week.push(
        new Day(
          currentDate.toLocaleDateString('en-us'),
          currentDate.toLocaleDateString('pl-pl', { weekday: 'long' })
        )
      );
      if (currentDay > 30) {
        currentDay = 1;
      }
      currentDay++;
      currentDate.setDate(currentDay);
    }

    return week;
  }

export default Plan;