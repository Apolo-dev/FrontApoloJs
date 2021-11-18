import React from 'react'
import BadgeCaja from './BadgeCaja'
import './Styles/CuerpoReportes.css'

import imagenp80 from '../Images/finanzas.png'
import imgf80 from '../Images/imgf80.png'
import imgwi from '../Images/imagenwiultima.png'
import imgpotencia from '../Images/imgpotencia.png'
import Grafico from './Grafico'

const CuerpoReportes = ({datosPesos, datosAbertura}) => {

    const p80 = 150
    const f80 = 500
    const wi = 10
    const res = ((10*wi)*((1/Math.sqrt(p80))-(1/Math.sqrt(f80))))
    const potencia = res.toFixed(2)
    //console.log(potencia);

    console.log(datosPesos);

    console.log(datosAbertura);

    //const resul = datosPesos[0].peso1 + datosAbertura[0].abertura1
    //console.log(resul);


    return (
        <div className="gridReportes">
            <div className="gridFiltrosReportes">
                <div>
                    <button className="botonDatos" >
                        Datos
                    </button>
                </div>
                <div className="calendario">
                    <label htmlFor="">Filtra por fecha: </label>
                    <input type="date" />
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
