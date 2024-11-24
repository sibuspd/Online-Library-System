import { useEffect, useState } from "react";
import BookII from "./BookII";
import { Link } from "react-router-dom";

function BookListII(){
    
    const [filteredBooks, setFilteredBooks] = useState([]); // Blank array initially
    const [searchText, setSearchText] = useState("");


    function handleSearch(){
            const fetchedBooks = [...filteredBooks];
            
            const shortlistedBooks = fetchedBooks.filter(book =>
                book.title.toLowerCase().includes(searchText.toLowerCase()));
            
            setFilteredBooks(shortlistedBooks);
    }
    

    useEffect(()=>{
        fetchData();
        console.log("useEffect called");
    },[]);
     // blank array prevents the  call of useEffect() more than once after 1st rendition of component
    
    async function fetchData(){
      const response = await fetch("https://www.dbooks.org/api/recent"); //Fetch returns a promise
      const jsonData = await response.json();

      setFilteredBooks(jsonData.books);
    }

    return(
        <>
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
              <Link to={`/book-id/${book.id}`} key={book.id}>
                <BookII bookDetails={book}/>
              </Link>)}
          </div>
          
      </div>
        </>
    )
}

export default BookListII

 