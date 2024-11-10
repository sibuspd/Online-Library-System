import PropTypes from "prop-types";
import "./style.css"

function Book(props){
    let bookProfile = props.bookDetails;
    
    return(
        <div className="book-card">
            <img src={bookProfile.image} width="200" height="250" className="book-cover"/>
            <div className="book-details">
                <h2 className="book-title">{bookProfile.title}</h2>
                <h4 className="book-author">{bookProfile.author}</h4>
                <p className="book-description">{bookProfile.description}</p>
            </div>
        </div>
    )
}

export default Book

Book.propTypes = {
    bookDetails: PropTypes.shape(
            {
                isbn: PropTypes.integer,
                title: PropTypes.string,                
                author: PropTypes.string, 
                publishedDate: PropTypes.string, 
                coverImage: PropTypes.string, 
                description: PropTypes.string,
                image: PropTypes.string
            }
        )
};