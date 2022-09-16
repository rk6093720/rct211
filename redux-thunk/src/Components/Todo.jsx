import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getTodo } from '../Redux/action';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const Todo = () => {
      const dispatch = useDispatch();
      const todos= useSelector((state)=> state.todos);
      
       
      useEffect(() => {
        if(todos.length==0)
        {
        dispatch(getTodo())
        }
      }, [])
      console.log(todos);

  return (
    <div>
     <h1>Todo</h1> 
     <br />
     <TodoInput/>
     <TodoList todo={todos} />

     
    </div>
  )
}

export default Todo
