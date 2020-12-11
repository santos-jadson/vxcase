import React from 'react'

import { Container } from './styles'
import { MdAddShoppingCart } from 'react-icons/md'

import productImage from '../../assets/tenis.jpg'

export default function Products() {
    return(
        <>
            <Container>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana para utilizar em corridas</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
                <li>
                    <img src={productImage} alt={'Tenis'} />

                    <strong>Tenis Bacana</strong>
                    <span>R$ 197,00</span>

                    <button type="button">
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                        </div>
                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            </Container>
        </>
    );
}
