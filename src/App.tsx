import React from 'react'
import './App.css'
import { RootRouter } from './router/rootRouter'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './constants/theme'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { SnackBarInstance } from './components/SnackBar/SnackBar'
import { DialogInstance } from './components/Dialog/Dialog'
import { ThemeProvider } from 'styled-components'

export const history = createBrowserHistory()

const App: React.FunctionComponent = () => {
    return (
        <MuiThemeProvider theme={ theme}>
            <ThemeProvider theme={ theme}>
                <Router>
                    <React.Fragment>
                        <CssBaseline/>
                        <RootRouter history={ history}/>
                        <SnackBarInstance/>
                        <DialogInstance/>
                    </React.Fragment>
                </Router>
            </ThemeProvider>
        </MuiThemeProvider>
    )
}

export default App
