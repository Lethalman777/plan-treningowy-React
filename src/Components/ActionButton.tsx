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
import { isPropertySignature, JsxElement } from 'typescript';
import { Day } from '../classes/day';
import SelectEx from './SelectEx';

type Props = {
    isEdit : boolean
    clickHandler() : void
    buttonText:string
    className:string
}

const ActionButton = (props:Props) => {
    
        return (  
            <section>
                <button className={props.className} type="submit" onClick={()=>{
                    props.clickHandler()
                }}>{props.buttonText}</button>
            </section>
        );
}

export default ActionButton;
