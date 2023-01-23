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
}

const editHandler = () =>{
   
}
const deleteHandler = () =>{
   
}

const ActionButton = (props:Props) => {
    
    if(props.isEdit){
        return (  
            <section>
                <button className="dayButton" type="submit" onClick={()=>{
                    editHandler()
                }}>Edytuj</button>
            </section>
        );
    }else{
        return (   
            <section>
                <button className="usunCwButton" type="submit" onClick={()=>{
                    deleteHandler()
                }}>Usuń</button>
            </section>
        );
    }
}

export default ActionButton;
