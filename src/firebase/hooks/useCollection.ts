import { useCallback, useEffect, useState } from 'react'
import { firestore } from '../firestore'

export const useCollection = (collection: string, defaultValue: string | undefined = undefined ) => {
    const [value, setValue] = useState<any>(defaultValue)
    const [error, setError] = useState<any>(undefined)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = firestore.collection(collection).onSnapshot((doc) => {
            setLoading(false)
            setValue(doc.docs as any)
        }, (err) => {
            console.error('Error in useCollection', err)
            setLoading(false)
            setError(err)
        })
        return unsubscribe
    }, [])

    return { value, loading, error, firestore }
}
