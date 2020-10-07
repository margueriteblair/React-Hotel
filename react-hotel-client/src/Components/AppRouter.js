import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Rent from './Rent'
import Return from './Return'
import Home from './Home'

export default function AppRouter() {
    return (
        <div>
        <BrowserRouter>
            <Switch>
                
                <Route
                path='/' exact>
                <Home/>
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
        </BrowserRouter>
        </div>
    )
}
