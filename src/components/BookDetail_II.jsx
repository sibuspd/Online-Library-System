import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

    if(fetchedBook.length === 0) // fetchedBook is also an array with only 1 book object
        return <h1>Please wait while the book loads</h1>
    return(
        <>
           {fetchedBook.map(bookObject => {
                return(
                    <>
                        <h1>{bookObject.title}</h1>
                        <h2>{bookObject.subtitle}</h2>
                        <img src={bookObject.image} width="200px" height="200px" />
                        <h3>{bookObject.authors}</h3>
                    </>
                )
           })} 
        </>
    )
}

export default BookDetail_II