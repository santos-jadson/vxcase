import React, { useEffect, useState } from 'react';

import { CartList, MainContainer, OrderContainer } from './styles';
import { useParams } from 'react-router-dom'
import api from '../../services/api'

function Sale() {
    const { id } = useParams()
    const [sale, setSale] = useState()

    useEffect(() => {
        api.get(`/sales/${id}`).then(response => {
            setSale(response.data)
            console.log(sale)
        })
    },[id])

    if(!sale) {
        return(
            <h1>Loading...</h1>
        )
    }else{
        return (
            <MainContainer>
                <OrderContainer>
                    <div className="sale-info">
                        <h2>Quantidade de Itens: </h2>
                        <h3>{sale.quantityItems}</h3>
                    </div>
                    <div className="sale-info">
                        <h2>Valor Total: </h2>
                        <h3> {`R$ ${sale.totalPrice}`}</h3>
                    </div>
                    <div className="sale-info">
                        <h2>Tempo de entrega: </h2>
                        <h3>{`${sale.deliveryTime} Dias`}</h3>
                    </div>
                    <div className="sale-info">
                        <h2>Data da compra: </h2>
                        <h3>{`${sale.date}`}</h3>
                    </div>
                </OrderContainer>
            <CartList>
                {   sale.items.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="product-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="product-content">
                                    <strong>{item.title}</strong>
                                    <div className="second-line">
                                        <span className="parcial-value">{`R$ ${item.price} p/und`}</span>
                                        <input 
                                            className="quantity" 
                                            type="number" 
                                            name="quantity" 
                                            id="quantity"
                                            value={item.quantity}
                                            readOnly
                                        />
                                        <span className="total-value">{`Total: R$ ${item.total} `}</span>
                                    </div>
                                    <div className="third-line">
                                        <span className="delivery-time"> {`Prazo de ${item.deliveryTime} dias`} </span>
                                    </div>
                                </div>
                            </li>
                        )
                    })    
                }
            </CartList>
            </MainContainer>
        )
    }
}

export default Sale;