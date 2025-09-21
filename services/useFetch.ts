//fetchmovies
//fetchmoviedetails

import { useEffect, useState } from "react"

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true)=> {
    const [data, setData]= useState<T | null>(null);
    const [loading, setlodaing] =useState(false);
    const[error, setError] = useState<Error | null>(null);
    const fetchData= async () =>{
        try{
            setlodaing(true);
            setError(null)
            const result = await fetchFunction();
            setData(result);

        }
        catch(err){
            //@ts-ignore
        throw new Error('failed to fetch movies', response.statusText);
        }
        finally{
            setlodaing(false);
        }
    }
    const reset= () => {
        setData(null);
        setlodaing(false);
        setError(null);
    }
    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    },[]);

    return {data,loading, error, refetch: fetchData,reset};
}
export default useFetch