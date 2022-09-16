

import * as types from "./actionTypes";

import axios from "axios";
const getBoook=(params)=>(dispatch)=>{
    dispatch({type:types.GET_BOOKS_REQUEST})

    return axios.get("http://localhost:8080/books",params)
    .then((r)=>{
       return dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.GET_BOOKS_FAILURE,payload:e})
    })
}

const updateBoook=(id,payload)=>(dispatch)=>{
    dispatch({type:types.UPDATE_BOOK_REQUEST})

    return axios.patch(`http://localhost:8080/books/${id}`,payload)
    .then((r)=>{
       return dispatch({type:types.UPDATE_BOOK_SUCCESS,payload:r.data})
    })
    .catch((e)=>{
        dispatch({type:types.UPDATE_BOOK_FAILURE,payload:e})
    })
}


export { getBoook, updateBoook}