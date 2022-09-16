import React from 'react'
import { Link } from 'react-router-dom'
// destructor with bookdata from booklist
const BookCard = ({bookdata}) => {
  return (
    <div>
       <div>
          <img src={bookdata.cover_photo} alt="image" width="100%" />
          <div>{bookdata.book_name}</div>
          <div>{bookdata.category}</div>
          <div style={{ display:"flex"}}>
          <div style={{flex:1}}>{bookdata.release_year}</div>
           
           <Link to={`/books/${bookdata.id}/edit`}>
          <button>Edit</button>
          </Link>
          <Link to={`/books/${bookdata.id}`}>
          <button>SinglePage</button>
          </Link>
          </div>
       </div>
    </div>
  )
}

export default BookCard
