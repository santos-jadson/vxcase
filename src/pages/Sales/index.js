import React, { useEffect, useState } from 'react';

import { MdExpandMore } from 'react-icons/md'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import { SalesList } from './styles'

function Sales() {
  const [sales, setSales] = useState()
  let count = 1;

  useEffect(() => {
    api.get('/sales').then(response => {
      setSales(response.data)
    })
  }, [])

  if(!sales) {
    return <h1 style={{"margin": "50px auto auto 50px"}}>Carregando...</h1>
  }else
    if(sales.length === 0) {
      return <h1 style={{"margin": "50px auto auto 50px"}}>Nenhuma venda registrada</h1>
    }else{
      return (
        <>
          <SalesList>
            {sales.map(sale => {
              return(
                <li key={sale.id}>
                  <h1>{count++}</h1>
    
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
                    <h3> {sale.deliveryTime} Dias</h3>
                  </div>
                  <div className="sale-info">
                    <h2>Data da compra: </h2>
                    <h3> {sale.date} </h3>
                  </div>
                <Link to={`/sales/${sale.id}`}>
                  <button type="button">
                      <span>DETALHES</span>
                      <div>
                          <MdExpandMore size={16} color="#FFF" />
                      </div>
                  </button>
                </Link>
                </li>
              )
            })}
          </SalesList>
        </>
      );
    }
}

export default Sales;