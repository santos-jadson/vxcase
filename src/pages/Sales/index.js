import React, { useEffect, useState } from 'react';

import { MdExpandMore } from 'react-icons/md'

import api from '../../services/api'

import { SalesList } from './styles'

function Sales() {
  const [sales, setSales] = useState()

  useEffect(() => {
    api.get('/sales').then(response => {
      setSales(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <SalesList>
        { sales && sales.length > 0 ? sales.map(sale => {
          return(
            <li key={sale.id}>
            <h1>{sale.id}</h1>

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

            <button type="button">
                <span>DETALHES</span>
                <div>
                    <MdExpandMore size={16} color="#FFF" />
                </div>
            </button>
        </li>
          )
        }): <h1>Nenhuma venda registrada</h1>}
        
      </SalesList>
    </>
  );
}

export default Sales;