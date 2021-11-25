import React, {useState} from 'react'
import './Styles/FiltroTurnos.css'

const FiltroTurnos = () => {


    const [filtro, setFiltro] = useState(false)

    const handleClickFiltro = () =>
    {
        setFiltro(!filtro)
    }



    return (
        <>
            <div className="filtroTurnosReport" onClick={handleClickFiltro}>
                caja
            </div>
            {filtro &&
                <div className="cjaFiltros">
                    <ul>
                        <li>turno A</li>
                        <li>turno b</li>
                    </ul>
                </div>
            }
        </>
    )
}

export default FiltroTurnos
