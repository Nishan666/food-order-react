import { useCallback, useEffect, useState } from "react"

const sendHttpRequest = async (url, config) => {
    const res = await fetch(url, config)

    const resData = await res.json()

    if (!res.ok) {
        throw new Error(
            resData.message || 'Something Went Wrong'
        )
    }
    return resData
}


const useHttp = (url, config, initialData) => {
    const [data, setData] = useState(initialData)
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const clearData = () => {
        setData(initialData)
    }

    const sendRequest = useCallback(async function sendRequest(data) {
        setIsLoading(true);
        try {
            const resData = await sendHttpRequest(url, { ...config, body: data });
            setData(resData)
        } catch (error) {
            setError(error.message || "Something went wrong")
        }
        setIsLoading(false)
    }, [url, config])

    useEffect(() => {
        if (config && (config.method === 'GET' || !config.method) || !config) {
            sendRequest()
        }
    }, [sendRequest, config])

    return {
        data,
        isLoading,
        error,
        sendRequest,
        clearData,
    }
}


export default useHttp;