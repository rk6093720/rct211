import * as types from "./actionTypes"

import axios from "axios"
const getTodo=()=>(dispatch)=>{
    dispatch({type:types.GET_TODOS_REQUEST})
    return axios.get("http://localhost:8080/todos")
    .then((r)=>{
      return  dispatch({type:types.GET_TODOS_SUCCESS, payload: r.data})
    })
    .catch((e)=>{
        dispatch({ type:types.GET_TODOS_FAILURE, payload:e})
    })
}
const addTodo=(payload)=>(dispatch)=>{
    dispatch({type:types.ADD_TODOS_REQUEST})
    return axios.post("http://localhost:8080/todos",payload)
    .then((r)=>{
    dispatch({type:types.ADD_TODOS_SUCCESS, payload:r.data})
    })
    .catch((e)=>{
        dispatch({ type:types.ADD_TODOS_FAILURE, payload:e})
    })
}


export {getTodo , addTodo}