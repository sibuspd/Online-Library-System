import PropTypes from "prop-types";
import Book from "./Book"
import "./style.css"

function BookList(props){

    return(
        <div className="bookList">
        {props.data.map(book => <Book key={book.isbn} bookDetails={book}/>)}
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