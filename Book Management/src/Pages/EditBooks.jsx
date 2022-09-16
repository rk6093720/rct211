import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getBoook, updateBoook } from '../Redux/App/action';

const EditBooks = () => {
   const {id}= useParams();
   const navigate= useNavigate();
   const dispatch= useDispatch();
  const books= useSelector((state)=> state.App.books)
  const [currentBook, setCurrentBook]= useState({})
  const [bookName, setBookName]= useState("");
  const [bookAuthor, setBookAuthor]= useState("");
  const [coverPhoto,setCoverPhoto]= useState("");
   const updateBookData=()=>{
     const payload={
      book_name:bookName,
      author:bookAuthor,
      cover_photo:coverPhoto,
     } 
     
    dispatch(updateBoook(id,payload))
    .then(()=> dispatch(getBoook()))
    .then(()=>{
      navigate("/")
    })


   }


    useEffect(()=>{
     if(books.length ===0){
      dispatch(getBoook())
     }
    },[books.length, dispatch])



    useEffect(()=>{
      if(id){
       const bookById= books.find((book)=>book.id===Number(id));
       bookById && setCurrentBook(bookById);
       bookById && setBookName(bookById.book_name);
       bookById && setBookAuthor(bookById.author);
       bookById && setCoverPhoto(bookById.cover_photo);
      }
    },[books,id])

  return (
    <div>
        <h2>Edit Page</h2>
        <div>
          <input type="text"
          value={bookName}
          placeholder="edit your book name"
          onChange={(e)=> setBookName(e.target.value)} />
        </div>
        <div>
        <input type="text"
          value={bookAuthor}
          placeholder="edit your book Author"
          onChange={(e)=> setBookAuthor(e.target.value)} />
        </div>
        <div>
        <input type="url"
          value={coverPhoto}
          placeholder="edit your cover photo"
          onChange={(e)=> setCoverPhoto(e.target.value)} />
        </div>
        <button onClick={updateBookData}>Update</button>
    </div>
  )
}

export default EditBooks
