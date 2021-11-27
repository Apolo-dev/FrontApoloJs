import React, {useState, useEffect} from 'react'
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
import closestIndexTo from 'date-fns/closestIndexTo'


const CuerpoReportes = () => {

    const [fecha, setFecha] = useState(new Date())
    const [pesos, setPesos] = useState([])

    const apiPesos = 'http://127.0.0.1:8000/api/pesos/'


    const getPesos = async ()=>
    {
        try
        {
            const res = await fetch(apiPesos)
            const data = await res.json()
            setPesos(data)    
        }catch(error)
        {
            console.log(error);
        }
    }


    const mapeoFecha = pesos.map((element)=>
    {
        return new Date(element.created)
    })

    const fechaFront = (fecha)
    const fechaBack = (mapeoFecha)
    const dateToCompare = fechaFront
    const datesArray = fechaBack
    const result = closestIndexTo(dateToCompare, datesArray)
    //console.log(result);

    // const pesitos = (pesos[result]).map((element)=>
    // {
    //     return element
    // })

    const pesitos = pesos[result]
    console.log(pesitos);


    useEffect(()=>
    {   
        return getPesos()
    }, [])
    

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
                    imagen = {imagenp80}
                    pesitos = {pesitos.peso1}
                    
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'F80(micras)'
                    //pesitos = {pesitos.peso2}
                    imagen = {imgf80}
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Wi(KWh/t)'
                    //pesitos = {pesitos.peso3}
                    imagen = {imgwi}

                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Potencia'
                    //pesitos = {pesitos.peso4}
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
