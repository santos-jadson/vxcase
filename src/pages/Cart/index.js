import React, { useEffect, useState } from 'react';
import { BsTrash } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid'


import api from '../../services/api'

import { CartList, OrderBox, MainContainer } from './styles';

function Cart() {
  const [ cart, setCart ] = useState()

  useEffect(() => {
    api.get('/cart').then(response => {
      setCart(response.data)
    })
  }, [])


  function handleSubmit() {
    let qty = 0
    let delivery = 0

    for(let product of cart.products){
      qty += product.quantity
      delivery < product.deliveryTime && (delivery = product.deliveryTime)
    }

    api.post('/sales',{
      id: uuidv4(),
      totalPrice: cart.total,
      deliveryTime: delivery,
      date: "02/12/1997",
      quantityItems: qty,
      items: cart.products
    }).then(response => {
      if(response.status === 201){ 
        alert("Venda registrada com sucesso")
      } else {
        alert("Erro! tente novamente mais tarde")
      }
    }) 

  }

  return (
    <MainContainer>
      <CartList>
        { cart && cart.products.length > 0 ? cart.products.map( product => {
            return (
              <li key={product.id}>

                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-content">
                  <strong>{product.title}</strong>
                  <div className="second-line">
                    <span className="parcial-value">{`R$ ${product.price}`}</span>
                    <input 
                      className="quantity" 
                      type="number" 
                      name="quantity" 
                      id="quantity"
                      value={product.quantity}
                    />
                    <span className="total-value">{`Total: R$ ${product.total} `}</span>
                  </div>
                  <div className="third-line">
                    <span className="delivery-time"> {`${product.deliveryTime} Dias`} </span>
                    <BsTrash size={22} className="trash" color="#000" cursor="pointer" />
                  </div>
                </div>

              </li>
            )
          }) : <h1>Seu carrinho está vazio</h1>
        }
      </CartList>

      <OrderBox>
          <h1>Pedido</h1>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>{cart ? `R$ ${cart.subTotal}` : `R$ 00,00 ` }</span>
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
            <span>{cart ? `R$ ${cart.subTotal}` : `R$ 00,00 ` }</span>
          </div>
          <button type="button" onClick={handleSubmit}>Finalizar Venda</button>
      </OrderBox>
    </MainContainer>
  )
}

export default Cart;