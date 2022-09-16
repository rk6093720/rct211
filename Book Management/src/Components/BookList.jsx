import React , { useEffect}from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getBoook } from '../Redux/App/action';
import BookCard from './BookCard';


const BookList = () => {
  const dispatch= useDispatch();
  const books=useSelector((state)=> state.App.books);
    const [searchParams]=useSearchParams()
  const location = useLocation();

  useEffect(() => {
    if( location ||  books?.length ===0)
    {

      const sortBy= searchParams.get("sortBy")
      let getBooksParams={
        params:{
          category:searchParams.getAll("category"),
          _sort:sortBy && 'release_year',
          _order:sortBy
        }
      }
     dispatch(getBoook(getBooksParams))
    }
   }, [location.search])
  // console.log(books)

  return (
    
      <>
      {
        books.length > 0 && books.map((singleBook)=>{
          return <BookCardWrapper  key={singleBook.id}>
           <BookCard bookdata={singleBook}/>
           </BookCardWrapper>
        })
      }
    </>
   
  )
}

export default BookList;

const BookCardWrapper= styled.div`
    border:2px solid green;
    width:300px;
`
