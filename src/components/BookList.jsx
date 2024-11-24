import PropTypes from "prop-types";
import Book from "./Book"
import "./style.css"
import {Books} from "../utils/bookData"
import { useState } from "react"
import { Link } from "react-router-dom";

function BookList(){

    const [searchText, setSearchText] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(Books);

  
    function handleSearch(){
     const shortlistedBooks = 
     Books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));
     console.log(shortlistedBooks);
     setFilteredBooks(shortlistedBooks);
    }

    return(
        <div>
          <div className="search-panel">
            <div id="add-book-container">
              <Link to="/add-book"><button id="add-book-button">Add a Book</button></Link>
            </div>
            
            <div className="search">
              <h2>Browse books below</h2>
              <div className="searchBarPlusButton">
                <input type="text" name="" id="" className="search-input" 
                onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={handleSearch} className="search-button">Search</button>
              </div>
            </div>
          </div>

          <div className="bookList">
            {filteredBooks.map(book =>
            <Link to={`/book-isbn/${book.isbn}`} key={book.isbn}>
              <Book bookDetails={book}/>
            </Link>)}
          </div>
        </div>
    )
}

export default BookList

BookList.propTypes = { 
  data: PropTypes.arrayOf( 
    PropTypes.shape(
      { 
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        publishedDate: PropTypes.string,
        coverImage: PropTypes.string,
        description: PropTypes.string
      }
    )
  )
};