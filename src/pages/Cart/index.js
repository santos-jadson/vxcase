import React from 'react';
import { CartList, OrderBox, MainContainer } from './styles';

import productImage from '../../assets/tenis.jpg'

import { BsTrash } from 'react-icons/bs'

function Cart() {
  return (
    <MainContainer>
      <CartList>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>

        <li>
            <img src={productImage} alt={'Tenis'} />

            <strong>Tenis Bacana para utilizar em corridas</strong>
            <span>R$ 197,00</span>
            <div className="itens-icons">
              <BsTrash size={22} color="#000" cursor="pointer" />
              <input type="number" name="quantity" id="quantity" min="1" max="99" defaultValue="2"/>
            </div>
            <span>Total: R$ 591,00 </span>
        </li>
      </CartList>

      <OrderBox>
        <h1>Pedido</h1>
        <div className="subtotal">
          <span>Subtotal</span>
          <span>R$ 150.00</span>
        </div>
        <div className="promo-code">
          <input type="text" placeholder="Inserir Cupom"/>
        </div>
        <div className="subtotal">
          <span>Desconto</span>
          <span>R$ 0,00</span>
        </div>
        <div className="total">
          <span>Total</span>
          <span>R$ 197,00</span>
        </div>
        <button type="button">Finalizar Venda</button>
      </OrderBox>
        
    </MainContainer>
  )
}

export default Cart;