import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { User, UserType } from '../classes/user'
import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './styles.css';
import { Day } from '../classes/day';
import { DayWorkout, DayWorkoutType } from '../classes/dayWorkout';
import PlanDay from './PlanDay';
import { Schedule, ScheduleType } from '../classes/schedule';
import { UserService } from '../classes/UserService';
import EditButton from './EditButton';
import PlanPanel from './PlanPanel';

type Props = {

}

export type time = {
  oldWeek:number,
  currentWeek:number,
  weekDiffrence:number,
  currentDate:Date,
  week:Day[]
}

const Plan = (props: Props) => {
  const [schedule, setSchedule] = useState<ScheduleType>({ index_nr: 1, weekNumber: 1, userName: "", listOfDayWorkouts: [] })
  const [days, setDays] = useState<JSX.Element[]>([])
  // const [oldWeek, setOldWeek] = useState<number>(4)
  // const [currentWeek, setCurrentWeek] = useState<number>(4)
  // const [currentDate, setCurrentDate] = useState<Date>(new Date())
  // const [week, setWeek] = useState<Day[]>(getWeek(currentDate))
  let currentDate = new Date()
  const [time, setTime] = useState<time>({oldWeek:4,currentWeek:4,weekDiffrence:0,currentDate:new Date(),week:getWeek(currentDate)})
  
  const [isEdit, setIsEdit] = useState<boolean>(false)
  // let week: Day[] = getWeek(currentDate)

  useEffect(() => {  
    UserService.getPlan(time.currentWeek, setSchedule)
    // console.log(time)
    // console.log(schedule)  
    getDays(isEdit, time.currentWeek, setDays, schedule.listOfDayWorkouts, time.week)
  }, [schedule.userName, schedule.listOfDayWorkouts, isEdit])

  useEffect(()=>{
    UserService.getPlan(time.currentWeek, setSchedule)
    console.log(time)
    console.log(schedule)  
    getDays(isEdit, time.currentWeek, setDays, schedule.listOfDayWorkouts, time.week)
  }, [time.currentWeek])

  return (
    <div className="UserDetail">
      <h1
      //  style="text-align:center"
      > Oto twój plan tygodnia </h1>
      <PlanPanel time={time} setTime={setTime}/> <br/>
      <section className="kalendarz">
        {days}
      </section>
      <EditButton setIsEdit={setIsEdit} isEdit={isEdit} />
    </div>
  );
}


const getDays = (isEdit: boolean, currentWeek: number, dayst:React.Dispatch<React.SetStateAction<JSX.Element[]>>, dayWorkouts: DayWorkoutType[], week: Day[]) => {
  let days: JSX.Element[] = []
  week.forEach(day => {
    dayWorkouts.forEach(element => {
      if (element.date == day.Date) {
        days.push(<PlanDay key={dayWorkouts.indexOf(element)} currentWeek={currentWeek} isEdit={isEdit} DayWorkout={element} day={day} />)
      }
    });
  });
  dayst(days)
}

const getCurrentDate = (currentDate:Date, time:time, setTime:React.Dispatch<React.SetStateAction<time>>) => {
  if (time.oldWeek > time.currentWeek) {
    setTime({...time, weekDiffrence:time.weekDiffrence-1})
    let date: Date = currentDate

    date.setDate(date.getDate() + 7*time.weekDiffrence)
    setTime({...time, currentDate:date})
    setTime({...time, oldWeek:time.oldWeek-1})
    console.log(time.oldWeek)
  }
  else if (time.oldWeek < time.currentWeek) {
    setTime({...time, weekDiffrence:time.weekDiffrence+1})
    let date: Date = currentDate

    date.setDate(date.getDate() + 7*time.weekDiffrence)  
    setTime({...time, currentDate:date}) 
    setTime({...time, oldWeek:time.oldWeek+1})
  }
  // else{
  //   setTime({...time, currentDate:time.currentDate})
  //   setTime({...time, oldWeek:time.currentWeek})
  // }
}

export const getWeek = (currentDatex: Date): Day[] => {
  let currentDate = currentDatex
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