import * as React from 'react'
import { forwardRef, useImperativeMethods, useRef, useState } from 'react'
import MUIDialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

const useImperativeHandle = require('react').useImperativeHandle

const Dialog = React.createRef()

export const getDialog = () => {
    return Dialog.current as any
}

enum DialogTypes {
    ERROR = 'Error',
}

const DialogComponent = (props: any, ref: any) => {
    const [open, setOpen] = useState(false)
    const [type, setType] = useState(undefined)
    const defaultHandleClose = () => setOpen(false)
    const [handleClose, setHandleClose] = useState(defaultHandleClose)
    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')

    useImperativeHandle(ref, () => ({
        showError: (message: string, onClickOk?: any, title?: string) => {
            setTitle(title || 'Erro')
            setType(DialogTypes.ERROR as any)
            setMessage(message)
            setOpen(true)
        },
        close: () => setOpen(false),
        setOpen,
        setMessage,
        set: ({ handleClose, open, message }: any) => {
            setHandleClose(handleClose)
            setOpen(open)
            setMessage(message)
        }
    }))

    return (
        <MUIDialog onClose={() => setOpen(false)} open={open} aria-labelledby="simple-dialog-title">
            <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
            <DialogContent>
                {message}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose as any || defaultHandleClose}>
                    Ok
                </Button>
            </DialogActions>
        </MUIDialog>
    )
}

const DialogWithRef = forwardRef(DialogComponent)

export const DialogInstance = () => {
    return (
        <DialogWithRef ref={Dialog}/>
    )
}
