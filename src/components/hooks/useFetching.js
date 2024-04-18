import { useState } from "react"

export const useFetching = (cb) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await cb()
        } catch (error) {
            setError(error.massage)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error]  
}