import "./Header.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import userContext from "../utils/userContext" 
import { useState } from "react"


function Header(){

    let {setUserName, username, loginStatus} = useContext(userContext);
    const [online, setOnline] = useState(false);
    return(
        <div className="header">
            <div id="username-box-container"> 
            <input type="text" placeholder="Set the Username here." id="username-box"
            onChange={(e)=>{setUserName(e.target.value); setOnline(true);}}/>
            </div>
            <ul>
                <Link to="/2nd_bookList"><li>Other Books</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <li>User: {username}
                    <span>{online?"🟢":"🔴"}</span>
                </li>
            </ul>
        </div>
    )
}
 
export default Header

