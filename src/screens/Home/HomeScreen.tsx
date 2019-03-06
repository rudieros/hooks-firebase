import * as React from 'react'
import { useCallback } from 'react'
import { useDoc } from '../../firebase/hooks/useDoc'

export const HomeScreen: React.FunctionComponent = ({

                                              }) => {
    const { value, setValue } = useDoc({
        collection: 'someCollection',
        doc: 'someDoc',
    })

    const timestamp = Date.now()

    const onClick = useCallback(() => {
        setValue({ timestamp })
    }, [timestamp])
    return <div>
        Home Page
        <button onClick={onClick}>
            Set Value to {timestamp}
        </button>
        Current Value: {value && value.timestamp && value.timestamp.toString() || ''}
    </div>
}
