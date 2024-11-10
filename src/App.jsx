import BookList from "./components/BookList"
import {Books} from "./utils/bookData"
import "./components/style.css"
import { useState } from "react"

function App() {

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch(){
  
   const shortlistedBooks = 
   Books.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()));
   console.log(shortlistedBooks);
   setFilteredBooks(shortlistedBooks);
  }

  return (
    <> 
      <h1 id="Heading">Welcome to Book Management Application</h1>
      <div className="search">
        <h2>Search for Books</h2>
        <div className="searchBarPlusButton">
          <input type="text" name="" id="" className="search-input" 
          onChange={(e)=>{setSearchText(e.target.value)}}/>
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>
      <BookList data={filteredBooks}/>
    </>
  )
}
export default App
