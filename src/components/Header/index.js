import React from 'react'

import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
    return(
        <header>
            <h2>Logo</h2>
            <nav>
                <ul className="navigation">
                    <li className="navigation_link"><Link to="/">Produtos</Link></li>
                    <li className="navigation_link"><Link to="/sales">Vendas</Link></li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart"><strong>Meu carrinho</strong></Link>
                <MdShoppingBasket size={36} />
            </div>
        </header>
    )
}

export default Header