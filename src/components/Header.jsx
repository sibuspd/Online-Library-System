import "./Header.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import userContext from "../utils/userContext" 

function Header(){

    const data = useContext(userContext);

    return(
        <div className="header">
            <ul>
                <Link to="/2nd_bookList"><li>Other Books</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>User: {data.username}
                    <span>{data.loginStatus?"🟢":"🔴"}</span>
                </li>
            </ul>
        </div>
    )
}

export default Header

