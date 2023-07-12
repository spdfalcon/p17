import React, { useReducer } from 'react'

export default function Counter() {



    const countReducer = (state, action) => {
        switch (action.type) {
            case 'ADD': {
                return { count: state.count + 1 }
            }
            case 'MINUS': {
                return {
                    count: state.count - 1
                }
            }
            default: {
                return state
            }
        }
    }



    const [counter, dispatch] = useReducer(countReducer, { count: 0 })
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex gap-3'>
                <button onClick={()=> dispatch({type:'MINUS'})} className='border'>minus</button>
                <h1>{counter.count}</h1>
                <button onClick={()=>dispatch({type:'ADD'})} className='border'>add</button>
            </div>
        </div>
    )
}
