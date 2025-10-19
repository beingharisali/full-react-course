import React from 'react'
import "./books.css"

let booksData = [
{
  bookImage:"https://m.media-amazon.com/images/I/81a1UWnv2bL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"The Bookshop: A History of the American Bookstore",
  bookAuthor:"Evan Friss"
},
{
  bookImage:"https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"The Lost Bookshop: The most charming and uplifting novel for 2025 and the perfect gift for book lovers!",
  bookAuthor:"Evie Woods"
},
{
  bookImage:"https://m.media-amazon.com/images/I/81qxDw+x9hL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"Read Smut Bookstore: A Spicy Small Town Romantic Comedy (Read Smut Series Book 1)",
  bookAuthor:"Kate J. Blake"
},
{
  bookImage:"https://m.media-amazon.com/images/I/81qxDw+x9hL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"Read Smut Bookstore: A Spicy Small Town Romantic Comedy (Read Smut Series Book 1)",
  bookAuthor:"Kate J. Blake"
},
{
  bookImage:"https://m.media-amazon.com/images/I/81qxDw+x9hL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"Read Smut Bookstore: A Spicy Small Town Romantic Comedy (Read Smut Series Book 1)",
  bookAuthor:"Kate J. Blake"
},
{
  bookImage:"https://m.media-amazon.com/images/I/81qxDw+x9hL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"Read Smut Bookstore: A Spicy Small Town Romantic Comedy (Read Smut Series Book 1)",
  bookAuthor:"Kate J. Blake"
},
{
  bookImage:"https://m.media-amazon.com/images/I/81qxDw+x9hL._AC_UL480_FMwebp_QL65_.jpg",
  bookTitle:"Read Smut Bookstore: A Spicy Small Town Romantic Comedy (Read Smut Series Book 1)",
  bookAuthor:"Kate J. Blake"
},

]


function BookStore() {
  return (
    <div>
      <h1>Book Store</h1>
      <div className="books">
        {
            booksData.map((meriBook)=>{
                return <Book {...meriBook} />
            })
        }
      </div>
    </div>
  )
}

export default BookStore


function Book(props) {
    console.log(props)
    return <div className='book'>
        <img src={props.bookImage} alt="book" />
        <h5>{props.bookTitle}</h5>
        <p>{props.bookAuthor}</p>
    </div>
}