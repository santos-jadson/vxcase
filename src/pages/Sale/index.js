import React from 'react';

import { CartList, MainContainer, OrderContainer } from './styles';

import tenis from '../../assets/tenis.jpg'

function Sale() {

  return (
    <MainContainer>
        <OrderContainer>
            <div className="sale-info">
                <h2>Quantidade de Itens: </h2>
                <h3>5</h3>
            </div>
            <div className="sale-info">
                <h2>Valor Total: </h2>
                <h3> {`R$ 150`}</h3>
            </div>
            <div className="sale-info">
                <h2>Tempo de entrega: </h2>
                <h3> 15 Dias</h3>
            </div>
            <div className="sale-info">
                <h2>Data da compra: </h2>
                <h3> 27 /02 /11</h3>
            </div>
        </OrderContainer>
      <CartList>
            <li>
                <div className="product-image">
                    <img src="https://i.ibb.co/ykJDYn8/item1.png" alt="{product.title}" />
                </div>
                <div className="product-content">
                    <strong>Tenis bacana para utilizar em corridas</strong>
                    <div className="second-line">
                        <span className="parcial-value">{`R$ 195,00 p/und`}</span>
                        <input 
                            className="quantity" 
                            type="number" 
                            name="quantity" 
                            id="quantity"
                            value="10"
                            readOnly
                        />
                        <span className="total-value">{`Total: R$ 1840,00 `}</span>
                    </div>
                    <div className="third-line">
                        <span className="delivery-time"> {`Prazo de 10 dias`} </span>
                    </div>
                </div>
            </li>
      </CartList>
    </MainContainer>
  )
}

export default Sale;