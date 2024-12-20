import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function BookDetail_II(){
    
    const [fetchedBook, setFetchedBook] = useState([]); //Initially fetchedBook is blank array

    const paramObject = useParams();
    
    useEffect(()=>{
        fetchData()},); // No dependency array here

    async function fetchData(){
        const result = await fetch("https://www.dbooks.org/api/recent");
        const jsonData = await result.json();
        const selectedBook = jsonData.books.filter(book => book.id === paramObject.id); 
        setFetchedBook(selectedBook);
    }

    const dispatch = useDispatch();

    function handleAdd(item){
        dispatch(addItem(item));
    }

    function handleRemoveBook(item){
        dispatch(removeItem(item));
    }

    if(fetchedBook.length === 0) // fetchedBook is also an array with only 1 book object
        return <h1>Please wait while the book loads</h1>
    return(
        <>
           {fetchedBook.map(bookObject => {
                return(
                    <>
                        <div className="individual-book">
                        <div className="left-panel">
                                <Link to="/browse-books">
                                    <button id="back-to-browse-button">Back to Browse</button>
                                </Link>
                            </div>
                            <div className="book-image">
                            <img src={bookObject.image} width="200px" height="200px" />
                            </div>
                            <div className="book-profile">
                                <h1>{bookObject.title}</h1>
                                <h2>{bookObject.subtitle}</h2>
                                <h3>{bookObject.authors}</h3>
                                <div className="cartButtons-container"> 
                                <button className="addCartButton" onClick={()=>handleAdd(bookObject)}>Add to Reading List </button>
                                <button className="deleteCartButton" onClick={() => handleRemoveBook(bookObject)}>Remove the Book </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
           })} 
        </>
    )
}

export default BookDetail_II