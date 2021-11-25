import React from 'react'
import BadgeCaja from './BadgeCaja'
import './Styles/CuerpoReportes.css'

import imagenp80 from '../Images/finanzas.png'
import imgf80 from '../Images/imgf80.png'
import imgwi from '../Images/imagenwiultima.png'
import imgpotencia from '../Images/imgpotencia.png'
import Grafico from './Grafico'
import CalendarioReportes from './CalendarioReportes'
//import FiltroTurnos from './FiltroTurnos'
//import getUnixTime from 'date-fns/getUnixTime'

//import isEqual from 'date-fns/isEqual'

//import isWithinInterval from 'date-fns/isWithinInterval'



const CuerpoReportes = () => {
    

    return (
        <div className="gridReportes">
            <div className="gridFiltrosReportes">
                <div>
                    <button className="botonDatos" >
                        Datos
                    </button>
                </div>
                <div className="calendario">
                    <div className="as">
                        <label htmlFor="">Filtrar por Fecha: </label>
                    </div>
                    <div>
                        <CalendarioReportes
                        //fecha = {fecha}
                        //setFecha={setFecha}
                        />
                    </div>
                </div>
                
            </div>
            <div className="gridCajasReportes">
                <div>
                    <BadgeCaja
                    nombre = 'P80(micras)'
                    imagen = {imagenp80}
                    //resultado = {resultado}
                    
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'F80(micras)'
                    
                    imagen = {imgf80}
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Wi(KWh/t)'
                    
                    imagen = {imgwi}

                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Potencia'
                    
                    imagen = {imgpotencia}
                    />
                </div>
            </div>
            <div className="gridGraficosReportes">
                <div>
                    <Grafico />
                </div>
                <div>
                    <Grafico />
                </div>
                <div>
                    <Grafico />
                </div>
            </div>
        </div>
    )
}

export default CuerpoReportes
