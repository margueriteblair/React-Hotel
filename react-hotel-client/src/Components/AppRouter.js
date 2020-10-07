import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Rent from './Rent'
import Return from './Return'

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route
                path='/' exact>
                </Route>
                <Route
                path='/checkin' exact>
                <Rent/>
                </Route>
                <Route
                path='/checkout' exact>
                <Return />
                </Route>

            </Switch>
        </div>
    )
}
