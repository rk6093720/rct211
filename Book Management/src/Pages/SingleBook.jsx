import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getBoook } from '../Redux/App/action';

const SingleBook = () => {
   
    const {id} = useParams();
    const dispatch = useDispatch();
    const books = useSelector((state)=> state.App.books);
    const [ currentBook , setCurrentBook]= useState({});
    // console.log(books);

      useEffect(()=>{
          if(books?.length === 0)
          {
            dispatch(getBoook())
          }
      },[books?.length, dispatch])


    useEffect(()=>{
       if(id){
        const temp = books?.find( book => book.id === Number(id));
        temp && setCurrentBook(temp);
       }
    },[books, id]);
    // console.log(currentBook);
  return (
    <div>
       
        <h2>{currentBook?.book_name}</h2>
        <div> <img src={currentBook?.cover_photo}  alt="coverphoto" width="80%" /></div>
        <div>{currentBook?.category}</div>
        <div>{currentBook?.no_of_chapters}</div>
        <div>{currentBook?.release_year}</div>
        <div>{currentBook?.author}</div>
        <div>{currentBook?.chapters?.map((item)=>{
          return <div key={item.id}>
            <div>{item.name}:-{item.pages}</div>
          </div>
        })}</div>
        <button>
            <Link to={`/books/${currentBook.id}/edit`}>

            Edit
        </Link>
        </button>

    </div>
  )
}

export default SingleBook