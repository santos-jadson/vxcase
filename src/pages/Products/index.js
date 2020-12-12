import React, { useEffect, useState } from 'react'

import { MdAddShoppingCart } from 'react-icons/md'

import { Container } from './styles';
import api from '../../services/api'

export default function Products() {
    const [data, setData] = useState([])
    const [cart, setCart] = useState({})

    useEffect(() => {
        api.get('/products').then(response => {
            setData(response.data)
        })

        api.get('/cart').then(response => {
            setCart(response.data)
        })

    }, [])

    const addToCart = product => {
        const test = cart.products.findIndex(pd => {
            return pd.id === product.id
        })
        let array = []

        if(test === -1) {
            array = [...cart.products]
            array.push({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                deliveryTime: product.deliveryTime,
                quantity: 1,
                total: product.price
            })
        }else {
            array = [...cart.products]
            array[test].quantity++
            array[test].total += array[test].price
        }

        api.patch('/cart', {
            products: array,
        }).then(response => {
            if(response.status === 200) {
                setCart(response.data)
                alert("Done")
            }
        })
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
