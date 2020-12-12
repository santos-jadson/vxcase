import React, { useEffect, useState } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'

import { Container } from './styles';
import api from '../../services/api'

export default function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        api.get('/products').then(response => {
            setData(response.data)
        })
    }, [])

    const addToCart = product => {
        console.log(product)
    }

    return(
        <>
            <Container>
                {
                    data.map(product => {
                        return(
                            <li key={product.id}>
                                <img src={product.image} alt={product.title} />

                                <strong>{product.title}</strong>
                                <span>{`R$ ${product.price}`}</span>
                                <span>Entrega em <strong>{product.deliveryTime}</strong> dias</span>
                                <button type="button" onClick={() => addToCart(product)}>
                                    <div>
                                        <MdAddShoppingCart size={16} color="#FFF" />
                                    </div>
                                    <span>ADICIONAR AO CARRINHO</span>
                                </button>
                            </li>
                        )
                    })
                }
            </Container>
        </>
    )    
}
