import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { Business } from "../types/declarations";

export default (): [ (term: string) => void, Business[], string ] => {
    const [ results, setResults ] = useState<Business[]>([]);
    const [ errorMessage, setErrorMessage ] = useState("")
    const searchApi = (term: string): void => {
        yelp.get("/search", {
            params: { location: term, limit: 30 },
        }).then((response: any) => {
            console.log("fetched!");
            setResults(response.data?.businesses);
        }).catch(error => {
            setErrorMessage(JSON.stringify(error))
        })
    };
    useEffect(() => {
        searchApi('roma')
    }, []);
    return [ searchApi, results, errorMessage ]
}
