import { useRouteError} from "react-router-dom"
import "./Error.css"
import errorImage from "../assets/errorImage.png";
import { Link } from "react-router-dom";

function Error(){

    const err = useRouteError();
    console.log(err);
    return(
            <div className="error-container">
                <img src={errorImage} className="error-image" height="250px" width="250px" />
                <h1>Oops... Something Went Wrong!</h1>
                <h2>We can't seem to find the page you're looking for.</h2>
                <h4>Please check the URL and try again.</h4>
                <div className="error-details">
                    <p><strong>Error Code:</strong> {err.status}</p>
                    <p><strong>Message:</strong> {err.statusText}</p>
                </div> 
                <Link to="/"><button id="redirect-button">Go Back Home</button></Link>
            </div>
    )
}

export default Error
