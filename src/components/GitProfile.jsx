import useFetch from "../utils/useFetch"
import "./GitProfile.css"
import Spinner from "./Spinner";

function GitProfile(){

    const { data, loading, error } = useFetch("https://api.github.com/users/sibuspd"); //Destructuring
    console.log({data, loading, error});

    if(error){
        return(
            <>
                <h4>Error in loading data</h4>
                <p>{error}</p>
            </>
        ) 
    }

    if(loading){
        return(
            <>
                <Spinner/>
            </>
        )
    }

    return(
        <>
            <div className="git-profile">
                <div className="git-details">   
                    <h5>{data.location}</h5>
                    <h6>Mail me at - sibuspd@gmail.com</h6>
                    <h5>You can find my project at:</h5>
                    <a href={data.repos_url} target="_blank" rel="noopener noreferrer">https://github.com/sibuspd?tab=repositories</a>
                </div>
                
                <div className="git-card">
                    <h2>{data.name}</h2>
                    <img src={data.avatar_url} width="250px" height="250px"/>
                    <h4>
                    <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a>
                    </h4>
                    
                </div>
            </div>
        </>
    )

}

export default GitProfile