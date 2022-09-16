
import React, { useState} from 'react'

import { useDispatch } from 'react-redux';
import { addTodo, getTodo } from '../Redux/action';

const TodoInput = () => {
    const dispatch=useDispatch()
    const [title, setTitle]= useState([]);
   
    const handleAdd=()=>{
       
        if(title){
            const payload={
                title:title,
                status:false,

            }
            dispatch( addTodo(payload))
            .then(()=> getTodo())
            // setTitle("")
        }
        
    }
 

  return (
    <div>
        <div>
        <input type="text"
        placeholder='add todo'
        value={title}
        onChange={(e)=> setTitle(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}

export default TodoInput