import React from 'react'
import { useParams } from 'react-router-dom'

const SingleBook = () => {
 return (
   <div>
     
     <div>
       <h1>All Books</h1>
       <span>Book Title</span>
       <span>Book Author</span>

       <button type='submit'>Remove Book</button>
     </div>
   </div>
 )
}

export default SingleBook
