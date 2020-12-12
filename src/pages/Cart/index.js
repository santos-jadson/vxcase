import React, { useEffect, useLayoutEffect, useState } from 'react';
import { CartList, OrderBox, MainContainer } from './styles';


import { BsTrash } from 'react-icons/bs'

import api from '../../services/api'

function Cart() {
  const [ cart, setCart ] = useState()

  useEffect(() => {
    console.log(cart)
    api.get('/cart').then(response => {
      setCart(response.data)
      console.log(response.data.products)
    })
  }, [])


  return (
    <MainContainer>
      <CartList>
        { cart && cart.products.length > 0 ? cart.products.map( product => {
            return (
              <li key={product.id}>
                <img src={product.image} alt={product.title} />

                <strong>{product.title}</strong>
                <span>{`R$ ${product.price}`}</span>
                <div className="itens-icons">
                  <BsTrash size={22} color="#000" cursor="pointer" />
                  <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue={product.quantity}/>
                </div>
                <span>{`Total: R$ ${product.total} `}</span>
              </li>
            )
          }) : <h1>Seu carrinho está vazio</h1>
        }
      </CartList>

      <OrderBox>
          <h1>Pedido</h1>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>{cart ? `R$ ${cart.subTotal.toFixed(2)}` : `R$ 00,00 ` }</span>
          </div>
          <div className="promo-code">
            <input type="text" placeholder="Inserir Cupom"/>
          </div>
          <div className="subtotal">
            <span>Desconto</span>
            <span>R$ 0.00</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{cart ? `R$ ${cart.subTotal.toFixed(2)}` : `R$ 00,00 ` }</span>
          </div>
          <button type="button">Finalizar Venda</button>
      </OrderBox>
    </MainContainer>
  )
}

export default Cart;