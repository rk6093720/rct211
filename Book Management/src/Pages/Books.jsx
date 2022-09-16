import React from 'react'

import FilterComp from "../Components/FilterComp";
import BookList from "../Components/BookList";
import styled from 'styled-components';
const Books = () => {


   
  return (
    <div >
      <h1>Books Details</h1>
      <BookWrapper>
        <FilterCompWrapper>
      <FilterComp/>
      </FilterCompWrapper>
      <BookListWrapper>
      <BookList/>
      </BookListWrapper>
      </BookWrapper>
 
    </div>
  )
}

export default Books;

const  BookWrapper = styled.div`
   display:flex;
   border :2px solid red;

  
`
const FilterCompWrapper= styled.div`
   width:300px;
   border:2px solid blue;

`

const BookListWrapper = styled.div`

 width:100%;
 border:2px solid red;
  display:grid;
  grid-template-columns:repeat(auto-fit, minmax(300px,max-content));
  grid-gap:10px;
  justify-content:center;
`