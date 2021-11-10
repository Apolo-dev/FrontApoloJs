import React from 'react'
import './Styles/BadgeCaja.css'

const BadgeCaja = ({nombre,dato, imagen}) => {
    return (
        <div className="GridcajaGeneral">
            <div className="gridDatosCajas">
                <div>
                    {nombre}
                </div>
                <div>
                    {dato}
                </div>
            </div>
            <div className="ImagenDatosCaja">
                <img src={imagen} alt="finanzas" />
            </div>
        </div>
    )
}

export default BadgeCaja
