import React from 'react'
import BadgeCaja from './BadgeCaja'
import './Styles/CuerpoReportes.css'

import imagenp80 from '../Images/finanzas.png'
import imgf80 from '../Images/imgf80.png'
import imgwi from '../Images/imagenwiultima.png'
import imgpotencia from '../Images/imgpotencia.png'
import Grafico from './Grafico'
import CalendarioReportes from './CalendarioReportes'
//import getUnixTime from 'date-fns/getUnixTime'

//import { format } from 'date-fns'
//import isEqual from 'date-fns/isEqual'

const CuerpoReportes = ({fecha, setFecha, datosPesos}) => {

    const p80 = 150
    const f80 = 500
    const wi = 10
    const res = ((10*wi)*((1/Math.sqrt(p80))-(1/Math.sqrt(f80))))
    const potencia = res.toFixed(2)
  
    //window.__localeId__ = 'es'
    
    //const diaBack = fechaBack.getDate()

    

    


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
                        fecha = {fecha}
                        setFecha={setFecha}
                        />
                    </div>
                </div>
            </div>
            <div className="gridCajasReportes">
                <div>
                    <BadgeCaja
                    nombre = 'P80(micras)'
                    dato = {p80}
                    imagen = {imagenp80}
                    //resultado = {resultado}
                    
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'F80(micras)'
                    dato = {f80}
                    imagen = {imgf80}
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Wi(KWh/t)'
                    dato = {wi}
                    imagen = {imgwi}

                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Potencia'
                    dato = {potencia}
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
