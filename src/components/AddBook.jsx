import "./AddBook.css"
import { useState } from "react"
import { add } from "../utils/bookSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function AddBook(){
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({ // Ensures form remains blank initially
        isbn: '',
        title: '',
        subtitle: '',
        category: '',
        author: '',
        publishedDate: '',
        publisher: '',
        pages: '',
        description: '',
        website: '',
        image: ''
    });

    function validateForm(){ // For ensuring all book details filled are valid
        if(!formData.isbn || isNaN(formData.isbn)) return false;
        if(!formData.title) return false;
        if(!formData.subtitle) return false;
        if (!formData.author) return false;
        if (!formData.publisher) return false;
        if (!formData.description) return false;
        if (!formData.image) return false;
        return true;
    }

    function handleSubmit(e){
        e.preventDefault();
        if(validateForm()){
            dispatch(add(formData)); // Dispatches action "add" to add a new book to appStore
            console.log("Book Added", formData);
            setFormData({ isbn: '', title: '', subtitle: '', category:'', author: '', publishedDate: '', publisher: '', pages: '', description: '', website: '', image: '' }); // Reset form input boxes
            alert("Book added successfuly");
            navigate(`/browse-books/`); // Redirect to Browse books after form submission
        }
        else alert("Please fill out all required fields correctly.");
    }

    function handleChange(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]:value}); // Computed Property and Value (ES6)
    }

    return(
        <>
        <h1 id="header">Add Book Details</h1>
        <div>
            <form onSubmit={handleSubmit} id="form-element">
                <label htmlFor="isbn" className="form-label">ISBN : 
                    <input type="text" name="isbn" placeholder="Type only numbers" value={formData.isbn} onChange={handleChange} required/>
                </label>

                <label htmlFor="title" className="form-label">Title :
                    <input type="text" name="title" placeholder="Enter the Book's Name" value={formData.title} onChange={handleChange} required/>
                </label>

                <label htmlFor="subtitle" className="form-label">Subtitle :
                    <input type="text" name="subtitle" placeholder="Enter sub-title of Book" value={formData.subtitle} onChange={handleChange}/>
                </label>

                <label htmlFor="category" className="form-label">Category :
                    <input type="text" name="category" placeholder="sci-fi/ fiction/ non-fiction/ programming" value={formData.category} onChange={handleChange}/>
                </label>

                <label htmlFor="author" className="form-label">Author :
                    <input type="text" name="author" placeholder="Author's fullname" value={formData.author} onChange={handleChange} required/>
                </label>

                <label htmlFor="publishedDate" className="form-label">Date of Publication :
                    <input type="text" name="publishedDate" placeholder="YYYY-MM-DD" value={formData.publishedDate} onChange={handleChange}/>
                </label>

                <label htmlFor="published" className="form-label">Publisher's Name :
                    <input type="text" name="publisher" placeholder="Publisher's name" value={formData.publisher} onChange={handleChange} required/>
                </label>

                <label htmlFor="pages" className="form-label">Total Pages :
                    <input type="text" name="pages" placeholder="Number of pages" value={formData.pages} onChange={handleChange}/>
                </label>

                <label htmlFor="description" className="form-label">Description :
                    <textarea name="description" placeholder="A Short description" value={formData.description} onChange={handleChange} required
                    rows={5}/>
                </label>

                <label htmlFor="website" className="form-label">Website :
                    <input type="url" name="website" placeholder="Website link" value={formData.website} onChange={handleChange}/>
                </label>

                <label htmlFor="image" className="form-label">Image Url :
                        <input type="url" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required/>
                </label>

                <button type="submit" id="form-submit-button">Add Book</button>
            </form>
        </div>

        </>
    )
}
export default AddBook