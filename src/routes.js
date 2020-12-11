import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/Products'
import Cart from './pages/Cart'
import Sales from './pages/Sales'
import Header from './components/Header'

function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/cart' component={Cart} />
                <Route path='/sales' component={Sales} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes