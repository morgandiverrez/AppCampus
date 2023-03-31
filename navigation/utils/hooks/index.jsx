import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

export function useFetch(url) {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token token=secret");

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        if (!url) return 
            fetch(url, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
        
    }, [url])
    return { isLoading, data, error }
};


export function usePathToUri(path) {
    const prefix = "http://13.38.242.23/"
    const uri = prefix + path;
    return uri
}

export function useTheme() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return { theme, toggleTheme }
}


