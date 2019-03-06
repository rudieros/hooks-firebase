import { useCallback, useEffect, useState } from 'react'
import { firestore } from '../firestore'

export interface UsePathInput {
    collection: string
    doc: string
}

export const useDoc = ({ collection, doc }: UsePathInput, defaultValue: string | undefined = undefined) => {
    const [value, setValue] = useState<any>(defaultValue)
    const [error, setError] = useState<any>(undefined)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsubscribe = firestore.collection(collection).doc(doc).onSnapshot((snap) => {
            setLoading(false)
            setValue(snap.data() as any)
        }, (err) => {
            console.log('Error in useDoc', err)
            setLoading(false)
            setError(err)
        })
        return unsubscribe
    }, [])

    const setFirebaseValue = useCallback((val) => {
        return firestore.collection(collection).doc(doc).set(val)
    }, [])

    return {
        value,
        setValue: setFirebaseValue as any,
        loading,
        error,
        firestore,
        ref: firestore.collection(collection).doc(doc),
    }
}
