import React from 'react'

import './styles.css'

function Header() {
    return(
        <header>
            <h2>Logo</h2>
            <nav>
                <ul className="navigation_links">
                    <li>Produtos</li>
                    <li>Vendas</li>
                </ul>
            </nav>
            <h2>Cart</h2>
        </header>
    )
}

export default Header