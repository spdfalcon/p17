import React, { useReducer } from 'react'

export default function Input(props) {
    const inputReducer = (state , action)=>{
        switch(action.type){
            case 'CHANGE': {
                return {
                    value:action.value,
                    isValid: true
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
    const onchangeHandler = (event)=>{
        console.log(event.target.value);
        dispatch({
            type:'CHANGE',
            value:event.target.value
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
