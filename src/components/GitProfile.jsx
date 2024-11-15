import useFetch from "../utils/useFetch"

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
                <h5>Loading...... Please wait.</h5>
            </>
        )
    }

    return(
        <>
            <div>
                <h5>{data.location}</h5>
                <h6>Mail me at - sibuspd@gmail.com</h6>
                <h5>You can find my project at:</h5>
                <h5>{data.repos_url}</h5>
                
            </div>
            <div>
                <h2>{data.name}</h2>
                <img src={data.avatar_url} width="250px" height="250px"/>
                <h4>{data.html_url}</h4>
            </div>
        </>
    )

}

export default GitProfile