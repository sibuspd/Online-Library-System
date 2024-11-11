import {useParams} from "react-router-dom"
import { Books } from "../utils/bookData";

function BookDetail(){
 
    const paramObject = useParams();
    
    const currentBookArray = Books.filter(book => book.isbn === paramObject.isbn);
    console.log(currentBookArray); // Array of filtered books that obviously has 1 book object.
    return(
        <>
            {currentBookArray.map(bookObject => {
                return(
                    <>
                        <h1>{bookObject.title}</h1>
                        <h2>{bookObject.subtitle}</h2>
                        <img src={bookObject.image} width="200px" height="200px" />
                        <h4>{bookObject.publishedDate}</h4>
                        <h3>{bookObject.publisher}</h3>
                        <p>{bookObject.description}</p>
                    </>
                )
            }
            )}
        </>
    )
}
 
export default BookDetail

