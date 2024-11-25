import "./BrowseBooks.css"
import { useState, useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import { setCategory } from "../utils/bookSlice"
import Book from "./Book";
import { Link, useParams, useNavigate } from "react-router-dom";

function BrowseBooks(){

    const dispatch = useDispatch();
    const { category } = useParams();
    const navigate = useNavigate();
    const selector = useSelector((state) => state.bookRepo.repo); // Picks the array stored in slice
    const [filteredBooks, setFilteredBooks] = useState(selector);
    const selectedCategory = category || "all"; // Dynamic routing parameter

    const [searchText,setSearchText] = useState(""); // to handle the state of entered Text

    useEffect(()=>{ // Initially all Books will be on the UI
        let categorized = selector; // Initially default upon no selection of options 
        if(selectedCategory !== 'all') // Incase the category: value in state has changed
            categorized = categorized.filter(book => book.category === selectedCategory);

        if(searchText)
            categorized = categorized.filter(book => book.title.toLowerCase().includes(searchText.toLowerCase()))
        
        setFilteredBooks(categorized);
    },[selector, selectedCategory, searchText]); // Booklist will re-render when category is changed again

    function handleSearchChange(e){
        setSearchText(e.target.value);
        console.log(searchText); 
    }

    function handleCategoryChange(e){
        dispatch(setCategory(e.target.value));
        navigate(`/browse-books/${e.target.value}`); // Establishing URL parameter based on Category
    }

    return(
        <>
        <h1>Browse Books by Category</h1>
        <div className="search-PANEL">
            <div className="search-bar">
                <input type="text" placeholder="Search as you type" value={searchText}
                onChange={handleSearchChange}/>
            </div>
            <div className="category-filter">
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="all">All Categories</option>
                    <option value="fiction">Fiction</option>
                    <option value="non-fiction">Non-Fiction</option>
                    <option value="programming">Programming</option>
                    <option value="sci-fi">Sci-Fi</option>
                </select>
            </div>
        </div>
        
        <div className="book-list">
            {filteredBooks.map(book => (
                        <Link to={`/book-isbn/${book.isbn}`} key={book.isbn}>
                            <Book bookDetails={book}/>
                        </Link>
            ))}
        </div>    
        </>
    )
}
export default BrowseBooks