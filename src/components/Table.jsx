import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const Table = ({children}) => {      
   
    return (
        <div className='list-items-container'>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre del plan</th>
                    <th scope="col">Periodo</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Acción</th>
                </tr>
            </thead>

                 {children}

            </table>
        </div>
    )
}

Table.propTypes = {
    arrPlan : PropTypes.array.isRequired,
    setTotalQty : PropTypes.func,
    totalQty : PropTypes.number,
}

export default Table
