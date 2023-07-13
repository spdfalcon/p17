import React, { useEffect, useReducer, useState } from 'react'
import validator from '../../Validators/Validator';
import { useForm } from '../../hooks/useForm';
export default function Input(props) {
    console.log(props.validations);
    const inputReducer = (state , action)=>{
        switch(action.type){
            case 'CHANGE': {
                return {
                    value:action.value,
                    isValid: validator(action.value , action.validations)
                }
            }
            default: {
                return state
            }
        }

    }
    const [mainInput , dispatch] = useReducer(inputReducer , {
        value : '',
        isValid: false,
    })

    const {value , isValid} = mainInput
    const {id, onInputHandler} = props

    useEffect(()=>{
        onInputHandler(id , value,isValid)
    },[value])
    const onchangeHandler = (event)=>{
        console.log(event.target.value);
        dispatch({
            type:'CHANGE',
            value:event.target.value,
            validations:props.validations,
            isValid:true
        })
    }
    const element = props.element === 'input' ? (
        <input
        type={props.type}
        placeholder={props.placeholder}
        className={`px-2 py-1 rounded mx-2 ${props.className} ${mainInput.isValid ? 'ring ring-primary-color' : ' ring ring-red-300'}`}
        onChange={onchangeHandler}
        value={mainInput.value}
        ></input>
        ) : (
            <textarea
            placeholder={props.placeholder}
            className={props.className}
            onChange={onchangeHandler}
            value={mainInput.value}
        ></textarea>
    )
    return (
        <>
            {element}
        </>
    )
}
