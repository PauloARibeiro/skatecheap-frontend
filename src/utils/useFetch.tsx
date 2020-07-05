import { useEffect, useState } from 'react'

const useFetch = (url: RequestInfo, options: RequestInit) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const res = await fetch(url, options)
            const json = await res.json()

            setResponse(json)
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()

        // eslint-disable-next-line
    }, [])

    return { response, error }
}

export default useFetch
