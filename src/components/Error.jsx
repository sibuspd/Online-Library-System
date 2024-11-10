import { useRouteError} from "react-router-dom"

function Error(){

    const err = useRouteError();
    console.log(err);
    return(
        <>
            <h1>Oops..........!</h1>
            <h4>Please enter a valid URL.</h4>
            <p>{err.data}</p>
            <h3>{err.status}</h3>
            <h3>{err.statusText}</h3>
        </>
    )
}

export default Error
