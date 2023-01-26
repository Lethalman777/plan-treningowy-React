import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { User, UserType } from '../classes/user'
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
import { getWeek, time } from './Plan';

type Props = {
    setTime: React.Dispatch<React.SetStateAction<time>>
    time: time
    isNext: boolean
}

const WeekChange = (props: Props) => {

    const onWeekChange = () => {
        if (props.isNext) {
            let date: Date = props.time.currentDate
            console.log(date)
            date.setDate(date.getDate() + 7)
            console.log(date)
            props.setTime({...props.time, 
                oldWeek: props.time.oldWeek + 1,
                currentWeek: props.time.currentWeek + 1,
                weekDiffrence: props.time.weekDiffrence + 1,
                currentDate: date,
                week:getWeek(date)})
                console.log(props.time.currentDate)
            // props.setTime({ ...props.time, currentWeek: props.time.currentWeek + 1 })
            // props.setTime({ ...props.time, weekDiffrence: props.time.weekDiffrence + 1 })
            // props.setTime({ ...props.time, currentDate: date })
            // props.setTime({ ...props.time, oldWeek: props.time.oldWeek + 1 })
        }
        else {
            let date: Date = props.time.currentDate
            console.log(date)
            date.setDate(date.getDate() - 7)
            console.log(date)
            props.setTime({...props.time, 
                oldWeek: props.time.oldWeek - 1,
                currentWeek: props.time.currentWeek - 1,
                weekDiffrence: props.time.weekDiffrence - 1,
                currentDate: date,
                week:getWeek(date)})
                console.log(props.time.currentDate)
            // props.setTime({ ...props.time, currentWeek: props.time.currentWeek - 1 })
            // props.setTime({ ...props.time, weekDiffrence: props.time.weekDiffrence - 1 })
            // let date: Date = props.time.currentDate
            // console.log("tyty")
            // date.setDate(date.getDate() - 7)
            // props.setTime({ ...props.time, currentDate: date })
            // props.setTime({ ...props.time, oldWeek: props.time.oldWeek + 1 })
        }
    }

    if (props.isNext) {
        return (
            <section>
                <button className="nextButton" style={{ width: "200px" }} type="submit"
                    onClick={() => { onWeekChange() }}>Następny tydzień</button>
            </section>
        );
    }
    else {
        return (
            <section>
                <button className="nextButton" style={{ width: "200px" }} type="submit"
                    onClick={() => { onWeekChange() }}>Poprzedni tydzień</button>
            </section>
        );
    }

}

export default WeekChange;
