import {useParams} from "react-router-dom"
import { Books } from "../utils/bookData";
import "./style.css"
import { useDispatch } from "react-redux";
import { addItem, removeItem} from "../utils/cartSlice"
import { Link } from "react-router-dom";
function BookDetail(){
 
    const paramObject = useParams();
    
    const currentBookArray = Books.filter(book => book.isbn === paramObject.isbn);
    console.log(currentBookArray); // Array of filtered books that obviously has 1 book object.

    const dispatch = useDispatch();
    
    function handleAddBook(item){
        dispatch(addItem(item));
    }

    function handleRemoveBook(item){
        dispatch(removeItem(item));
    }

    if(currentBookArray.length === 0)
        return <h1>No such book ISBN exist in the repository.</h1>
    return(
        <>
            {currentBookArray.map(bookObject => {
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
                                <h4>{bookObject.publishedDate}</h4>
                                <h3>{bookObject.publisher}</h3>
                                <p className="book-text">{bookObject.description}</p>
                                <div className="cartButtons-container"> 
                                <button className="addCartButton" onClick={() => handleAddBook(bookObject)}>Add to Reading List </button>
                                <button className="deleteCartButton" onClick={() => handleRemoveBook(bookObject)}>Remove the Book </button>
                                </div>
                            </div>
                        </div>  
                    </>
                )
            }
            )}
        </>
    )
}
 
export default BookDetail

