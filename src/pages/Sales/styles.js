import styled from 'styled-components'

export const SalesList = styled.ul`

    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

    max-width: 80%;
    margin: 50px auto 0;

    display: flex;
    flex-direction: column;


    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        padding: 40px;
        margin-bottom: 50px;
        background-color: #fff;
        border-radius: 8px;
        -webkit-box-shadow: 0px 15px 15px -4px hsla(180,29%,50%,20%);
        -moz-box-shadow: 0px 15px 15px -4px hsla(180,29%,50%,20%);
        box-shadow: 0px 15px 15px -4px hsla(180,29%,50%,20%);
        transition: 0.5s;

        &:hover {
            transform: scale(0.98, 0.98);
        }

        h1 {
            font-size: 19px;
        }
    
        .sale-info {
            display: flex;
            flex-direction: column;
            align-items: center;

            h2 {
                font-size: 17px;
                font-weight: 500;
                color: #333;
            }

            h3 {
                margin-top: 15px;
                font-size: 14px;
            }
        }

        a {
            text-decoration: none;
        }

        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: hsl(180, 8%, 28%);
            border: 0;
            border-radius: 4px;
            cursor: pointer;

            transition: 0.2s;

            div {
                padding: 10px;
                border-left: 1px solid transparent;
                border-bottom-right-radius: 4px;
                border-top-right-radius: 4px;
                background-color: hsl(180, 14%, 20%);
            }

            span {
                margin: auto 10px;
                color: #fff;
                font-weight: bold;
            }

            &:hover {
                opacity: 0.9;
            }
        }
    }


    @media(max-width: 1080px) {
        li{
            h1 {
                font-size: 16px;
            }

            .sale-info {
                h2 {
                    font-size: 14px
                }

                h3 {
                    font-size: 11px;
                }
            }
        }
    }

    @media(max-width: 950px) {
        li{
            h1 {
                font-size: 14px;
            }

            .sale-info {
                h2 {
                    font-size: 12px
                }

                h3 {
                    font-size: 9px;
                }
            }
        }
    }

    @media(max-width: 850px) {
        display: grid;
        grid-template-columns:repeat(2, 1fr);
        gap: 30px;

        li{
            flex-direction: column;

            h1 {
                color:transparent;
            }

            .sale-info {
                margin-bottom: 20px;

                h2 {
                    font-size: 16px
                }

                h3 {
                    font-size: 13px;
                }
            }
        }
    }

    @media(max-width: 650px) {
        grid-template-columns:repeat(1, 1fr);
    }

`