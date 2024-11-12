import { useEffect, useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

function BookListII(){
    
    const [filteredBooks, setFilteredBooks] = useState([]); // Blank array initially
    const [searchText, setSearchText] = useState("");


    function handleSearch(){
            //TBD
    }
    

    useEffect(()=>{
        fetchData();
    },[]);
    
    async function fetchData(){
      const response = await fetch("https://www.dbooks.org/api/recent"); //Fetch returns a promise
      const jsonData = await response.json();
      console.log(jsonData.books);

      setFilteredBooks(jsonData.books);
    }

    return(
        <>
        <div>
        <div className="search">
          <h2>Search for Books</h2>
          <div className="searchBarPlusButton">
            <input type="text" name="" id="" className="search-input" 
            onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={handleSearch} className="search-button">Search</button>
          </div>
        </div>

        <div className="bookList">
        {filteredBooks.map(book =>
        <Link to={`/book-isbn/${book.isbn}`} key={book.isbn}>
          <Book bookDetails={book}/>
        </Link>)}
        </div>
        </div>
        </>
    )
}

export default BookListII

 