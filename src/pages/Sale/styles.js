import styled from 'styled-components'

export const MainContainer = styled.main`
width: 100%;
`

export const OrderContainer = styled.div`
    width: 60%;
    margin: 50px auto;
    padding: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #FFF;
    border-radius: 6px;
    -webkit-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    -moz-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
    transition: 1s;

    .sale-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 18px;
        }

        h3 {
            font-size: 15px;
            margin-top: 25px;
            color: #333;
        }
    }

`

export const CartList = styled.ul`
    width: 60%;
    margin: 50px auto;

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
            max-width: 200px;
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