import * as React from 'react'
import { Route } from 'react-router'
import { Routes } from './routes'
import { HomeScreen } from '../screens/Home/HomeScreen'

export const RootRouter: React.FunctionComponent<{ history: any }> = ({ history }) => {

    return (
        <React.Fragment>
            <Route exact path={Routes.home} component={HomeScreen} />
        </React.Fragment>
    )
}
