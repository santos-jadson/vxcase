import styled from 'styled-components'

export const Container = styled.ul`
    max-width: 80%;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    gap: 30px;
    list-style: none;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFF;
        border-radius: 6px;
        -webkit-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
        -moz-box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);
        box-shadow: -1px 13px 20px -9px rgba(0,0,0,0.18);

        strong {
            margin-top: 10px;
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