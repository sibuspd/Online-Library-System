import "./AddBook.css"
import { useState } from "react";
import {Books} from "../utils/bookData"

function AddBook(){
    
    const [formData, setFormData] = useState({
        isbn: '',
        title: '',
        subtitle: '',
        author: '',
        publishedDate: '',
        publisher: '',
        pages: '',
        description: '',
        website: '',
        image: ''
    });

    function handleSubmit(e){
        e.preventDefault();
        Books.push(formData); // Pushes the new book object to existing array under Utils
        console.log(Books); // Updates are made in runtime memory only.
        setFormData({ isbn: '', title: '', subtitle: '', author: '', publishedDate: '', publisher: '', pages: '', description: '', website: '', image: '' }); // Reset form input boxes
        alert("Book added successfuly");
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
                    <input type="text" name="title" placeholder="Type only numbers" value={formData.title} onChange={handleChange} required/>
                </label>

                <label htmlFor="subtitle" className="form-label">Subtitle :
                    <input type="text" name="subtitle" placeholder="Type only numbers" value={formData.subtitle} onChange={handleChange}/>
                </label>

                <label htmlFor="author" className="form-label">Author :
                    <input type="text" name="author" placeholder="Type only numbers" value={formData.author} onChange={handleChange} required/>
                </label>

                <label htmlFor="publishedDate" className="form-label">Date of Publication :
                    <input type="text" name="publishedDate" placeholder="Type only numbers" value={formData.publishedDate} onChange={handleChange}/>
                </label>

                <label htmlFor="published" className="form-label">Publisher's Name :
                    <input type="text" name="publisher" placeholder="YYYY-MM-DD" value={formData.publisher} onChange={handleChange} required/>
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