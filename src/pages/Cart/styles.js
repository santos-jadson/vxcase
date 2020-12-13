import styled from 'styled-components'

export const MainContainer = styled.main`
width: 90%;
display: grid;
grid-template-areas: 'card card card order';
`

export const CartList = styled.ul`
    max-width: 80%;
    margin: 50px 0 0 30px;

    grid-area: card;

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #FFF;
        border-radius: 6px;
        margin-bottom: 50px;
        -webkit-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
        -moz-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
        box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
        transition: 1s;

        &:hover {
            transform: scale(0.99, 0.99)
        }

        img {
            align-self: center;
            max-width: 250px;
        }

        .product-content {
            width: 70%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        strong {
            font-size: 15px;
            max-width: 90%;
            color: #333;
            margin: 20px auto;
        }

        .second-line span {
            margin: auto 20px;
        }

        span {
            font-weight: bold;
            margin: 10px auto;
        }

        input {
            width: 50px;
            margin-left: 10px;
            -moz-appearance:textfield;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        .third-line {
            margin-top: 20px;
            display: flex;
            flex-direction: row;
            align-items: center
        }

        .trash {
            margin-left: 30px;
        }
        
    }
`

export const OrderBox = styled.aside`
    grid-area: order;
    margin-top: 50px;
    margin-left: 75%;
    padding: 50px;
    position: fixed;

    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;
    -webkit-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    -moz-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    transition: 1s;

    &:hover {
            transform: scale(0.99, 0.99)
    }

    h1 {
        align-self: center;
    }

    .subtotal, .total {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    .subtotal, .total, button, input {
        margin-top: 20px;
    }

    button {
        background-color: #27caa5;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.2s;
        font-weight: bold;
        &:hover {
            background-color: #2E806D;
            
        }
    }
`