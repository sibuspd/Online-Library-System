import "./Header.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import userContext from "../utils/userContext" 
import { useState } from "react"
import { useSelector } from "react-redux"


function Header(){

    const cartItems = useSelector( (store) => store.cart.items);
    console.log(cartItems);

    let {setUserName, username} = useContext(userContext);
    const [online, setOnline] = useState(false);
    
    const [toggleDisplay, setToggleDisplay] = useState(false);
    function handleCartClick(){
        setToggleDisplay(!toggleDisplay);
    }
    return(
        <div className="header">
            <div id="username-box-container"> 
            <input type="text" placeholder="Set the Username here." id="username-box"
            onChange={(e)=>{setUserName(e.target.value); setOnline(true);}}/>
            </div>
            <ul>
                <Link to="/2nd_bookList"><li>Extras</li></Link>
                <Link to="/"><li>Home</li></Link>
                <Link to="/browse-books"><li>Browse Books</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
                <Link to="/add-book"><li>Add Book</li></Link>
                <li>User: {username}
                    <span>{online?"🟢":"🔴"}</span>
                </li>
            </ul>
            <div id="cartSlice">
                <Link to="/reading-list"><li id="reading-list"> My Readinglist 📚 <span id="cartCount" onClick={handleCartClick}>{ cartItems.length }</span></li></Link>
            </div>
        </div>
        
    )
}
 
export default Header

