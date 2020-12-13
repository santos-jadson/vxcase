import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Products from './pages/Products'
import Cart from './pages/Cart'
import Sales from './pages/Sales'
import Header from './components/Header'
import Sale from './pages/Sale'

function Routes() {
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Products} />
                <Route path='/cart' component={Cart} />
                <Route path='/sales' exact component={Sales} />
                <Route path='/sales/:id' component={Sale} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes