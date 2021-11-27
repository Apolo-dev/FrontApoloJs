import React from 'react'
import './Styles/BadgeCaja.css'

const BadgeCaja = ({nombre,dato, imagen, pesitos}) => {
    return (
        <div className="GridcajaGeneral">
            <div className="gridDatosCajas">
                <div>
                    {nombre}
                </div>
                <div>
                    {pesitos}
                </div>
            </div>
            <div className="ImagenDatosCaja">
                <img src={imagen} alt="finanzas" />
            </div>
        </div>
    )
}

export default BadgeCaja
