import PropTypes from "prop-types";
import "./style.css"

function BookII(props){
    let bookProfile = props.bookDetails;
    
    return(
        <div className="book-card">
            <img src={bookProfile.image} width="200" height="250" className="book-cover"/>
            <div className="book-details">
                <h2 className="book-title">{bookProfile.title}</h2>
                <h2 className="book-subtitle">{bookProfile.subtitle}</h2>
                <h4 className="book-author">{bookProfile.authors}</h4>
            </div>
        </div>
    )
}

export default BookII

BookII.propTypes = {
    bookDetails: PropTypes.shape(
            {
                id: PropTypes.integer,
                title: PropTypes.string,
                subtitle: PropTypes.string,                
                authors: PropTypes.string, 
                image: PropTypes.string
            }
        )
};