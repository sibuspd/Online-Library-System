//DEFINING CUSTOM HOOK useFetch().

import { useEffect } from "react";
import { useState } from "react"

function useFetch(url){

    const [data,setData] = useState(null); // initially no data
    const [error, setError] = useState(null) // initially no error because of no fetching
    const [loading, setLoading] = useState(true); // Default loading display in no data initially 

    
    useEffect(()=>{ // Prevents infinite call of fetchData() every time data updates and component re-renders thus, calling the useFetch() again n again --> calling the fetchData() again & again

        const fetchData = async () =>{ //Function expression with arrow function
            
            try{ // There may be chances of network issue - so try-catch blocs
                const response = await fetch(url);  
                const result = await response.json(); 
        
                console.log(result); // Log the retrieved JSON data
        
                setData(result); // State of data is updated from NULL  to JSON data
            }
            catch (err){ // Chances that fetch() might encounter errors sometimes
                setError(err);
            } 
            finally{ // Runs if data is fetched or error occurs, we need to stop the Loading... display
                setLoading(false); // Default display is Loading is shut off
            }  // Finally{} is executed if either of the try/catch block executes completely.
        };

        fetchData();

    }, [url]); //  fetchData() only runs next time when URl changes
    

    return {data, loading, error}; // Return Loading status and error as well.
}

export default useFetch


