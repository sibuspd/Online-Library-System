import "./Header.css"
import {Link} from "react-router-dom"

function Header(){

    return(
        <div className="header">
            <ul>
                <Link to="/2nd_bookList"><li>Other Books</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Header

