import * as React from 'react'
import { forwardRef, useImperativeMethods, useRef, useState } from 'react'
import MUISnackBar from '@material-ui/core/Snackbar'
import Progress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { SnackBarMessage } from './styles'

const useImperativeHandle = require('react').useImperativeHandle

const SnackBar = React.createRef()

export interface SnackBar {
    show: (message: string) => void
    showSuccess: (message: string) => void
    showError: (message: string) => void
    showLoading: (message: string) => SnackBar
    hide: () => void
}

export const getSnackBar = () => {
    return SnackBar.current as SnackBar
}

export enum SnackBarVariants {
    ERROR = 'error',
    SUCCESS = 'success',
    WARNING = 'warning',
    NEUTRAL = 'neutral',
    LOADING = 'loading',
}

const SnackBarComponent = (props: any, ref: any) => {
    const [open, setOpen] = useState(false)
    const defaultHandleClose = () => setOpen(false)
    const [handleClose, setHandleClose] = useState(defaultHandleClose)
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState(SnackBarVariants.NEUTRAL)

    useImperativeHandle(ref, () => ({
        setHandleClose,
        setOpen,
        setMessage,
        show: (message: string) => {
            setOpen(true)
            setMessage(message)
            setVariant(SnackBarVariants.NEUTRAL)
        },
        showSuccess: (message: string) => {
            setOpen(true)
            setMessage(message)
            setVariant(SnackBarVariants.SUCCESS)
        },
        showError: (message: string) => {
            setOpen(true)
            setMessage(message)
            setVariant(SnackBarVariants.ERROR)
        },
        set: ({ handleClose, open, message }: any) => {
            setHandleClose(handleClose)
            setOpen(open)
            setMessage(message)
        },
        showLoading: (message: string) => {
            setOpen(true)
            setMessage(message)
            setVariant(SnackBarVariants.LOADING)
            return ref
        },
        hide: () => {
            setOpen(false)
        }
    }))


    const getActions = () => {
        switch (variant) {
            case SnackBarVariants.LOADING:
                return [<IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setOpen(false)}
                >
                    <Progress />
                </IconButton>]
            case SnackBarVariants.ERROR:
            case SnackBarVariants.NEUTRAL:
            case SnackBarVariants.SUCCESS:
                return [
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={() => setOpen(false)}
                    >
                        <CloseIcon/>
                    </IconButton>
                ]
            default:
                return []
        }
    }

    const getDuration = () => {
        switch (variant) {
            case SnackBarVariants.LOADING:
                return undefined;
            default:
                return 6000
        }
    }

    return (
        <MUISnackBar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={open}
            autoHideDuration={getDuration()}
            onClose={handleClose as any || defaultHandleClose}
            ContentProps={{ 'aria-describedby': 'message-id' }}
            message={<SnackBarMessage variant={variant}>{message}</SnackBarMessage>}
            action={getActions()}
        />
    )
}

const SnackBarWithRef = forwardRef(SnackBarComponent)

export const SnackBarInstance = () => {
    return (
        <SnackBarWithRef ref={SnackBar}/>
    )
}
