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

        strong {
            font-size: 15px;
            max-width: 90%;
            color: #333;
        }

        span {
            font-weight: bold;
            margin: 10px auto;
        }

        img {
            align-self: center;
            max-width: 250px;
        }

        .itens-icons {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            input {
                width: 50px;
                margin-left: 10px;
            }
        }


        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: hsl(180, 8%, 28%);
            border: 0;
            border-radius: 4px;
            margin-top: auto;
            margin-bottom: 25px;
            cursor: pointer;

            transition: 0.2s;

            div {
                padding: 10px;
                border-right: 1px solid transparent;
                border-bottom-left-radius: 4px;
                border-top-left-radius: 4px;
                background-color: hsl(180, 14%, 20%);
                margin-right: 5px;
            }

            span {
                margin-right: 10px;
                color: rgba(255,255,255,0.9);
            }

            &:hover {
                opacity: 0.9;
            }
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