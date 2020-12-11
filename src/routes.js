import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/Products'
import Cart from './pages/Cart'
import Sales from './pages/Sales'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/cart' component={Cart} />
                <Route path='/sales' component={Sales} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes