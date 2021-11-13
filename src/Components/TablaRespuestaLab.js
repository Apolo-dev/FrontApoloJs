import React from 'react'
import './Styles/TablaRespuestaLab.css'

const TablaRespuestaLab = () => {
    return (
        <div className="ContenedorTablaRespuesta">
            <div className="titulotabrespuest">
                <h3>Reporte</h3>
            </div>
            <div className="TablaRspuesta">
                <ul>
                    <li>P80: 89</li>
                    <li>F80: 599</li>
                    <li>Wi: 10</li>
                    <li>Potencia: 200</li>
                </ul>
            </div>
            <div className ="botonListaRespuesta">
                <button>
                    Guardar
                </button>
            </div>
        </div>
    )
}

export default TablaRespuestaLab
