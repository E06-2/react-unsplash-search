import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState({results: null, loading: true, error: null})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const results = await response.json()
                setData({results, loading: false, error: null})
            } catch (error) {
                setData({results: null, loading: false, error})
            }
        }
        fetchData()
    },[url])



    return data
}

export default useFetch
