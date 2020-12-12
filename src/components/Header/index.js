import React from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
    return(
        <header>
            <h2 className="logo">VX CASE</h2>
            <nav>
                <ul className="navigation">
                    <li className="navigation_link"><Link to="/">Produtos</Link></li>
                    <li className="navigation_link"><Link to="/sales">Vendas</Link></li>
                </ul>
            </nav>
            <div className="cart">
                <Link to="/cart">
                    <strong>Meu carrinho</strong> 
                    <AiOutlineShoppingCart size={36} color='#FFF'/>
                </Link>
            </div>
        </header>
    )
}

export default Header