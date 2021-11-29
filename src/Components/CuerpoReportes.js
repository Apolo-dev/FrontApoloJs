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
import getUnixTime from 'date-fns/getUnixTime'
import endOfDay from 'date-fns/endOfDay'

const CuerpoReportes = () => {

    const [fecha, setFecha] = useState(new Date())
    const [pesos, setPesos] = useState([])
    const [aberturas, setAberturas] = useState([])

    const finalDia = endOfDay(fecha)

    const fechaFinal = getUnixTime(finalDia)

    //const res = getUnixTime(result)
    //console.log(fechaFinal);

    const apiPesos = `http://127.0.0.1:8000/api/pesos/${fechaFinal}/`
    const apiAberturas = `http://127.0.0.1:8000/api/aberturas/${fechaFinal}/`


    const getPesos = async ()=>
    {
        try
        {
            const res = await fetch(apiPesos)
            const res2 = await fetch(apiAberturas)
            const data = await res.json()
            const data2 = await res2.json()
            setPesos(data)  
            setAberturas(data2)  
        }catch(error)
        {
            console.log(error);
        }
    }


    useEffect(()=>
    {   
        return getPesos()
    }, [])
   

    console.log(pesos);
    console.log(aberturas);

    // Calculo el p80

    // #########################1° paso: calcular la sumatoria:

    const arreglo = [pesos.peso1, pesos.peso2, pesos.peso3, pesos.peso4, pesos.peso5, pesos.peso6, pesos.peso7, pesos.peso8, pesos.peso9, pesos.peso10, pesos.peso11, pesos.peso12, pesos.peso13, pesos.peso14, pesos.peso15, pesos.peso16, pesos.peso17]

    const sumatoria = ()=>
    {
        let suma = 0
        for(let i=0; i<arreglo.length; i++)
        {
            suma += arreglo[i]
        }
        return(suma.toFixed(2))
    }


    // console.log(arreglo);
    console.log(sumatoria());

    // ############################## 2°paso: Sacar el retenido acumulado:

    const saltar = ()=>
    {
        for(let i = 0; i<arreglo.length; i++)
        {
            const num1 = 100
            const num2 = sumatoria()
            const num3 = arreglo[i]

            const porRetenido = (num3*(num1/num2)).toFixed(2)
            
            console.log(porRetenido);
            return porRetenido
        }
    }

    //const retenido = saltar()
    console.log(saltar());

    // ######################## 3° paso sacar el retenido acumulado:

    const reteAcumulado = ()=>
    {
        //let suma = saltar()
        for(let i = 0; i<arreglo.length; i++)
        {
            //const num1 = 100
            //const num2 = sumatoria()
            //const num1 = arreglo[i]
            const num2 = arreglo[i+1] + arreglo[i]

            const porRetenido = num2
            
            console.log(porRetenido);
            return porRetenido
        }
    }

    console.log(reteAcumulado());
    //console.log(retenidoAcumulado);



    

    return (
        <div className="gridReportes">
            <div className="gridFiltrosReportes">
                <div>
                    
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
                    pesos = {pesos.peso1}   
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'F80(micras)'
                    pesos = {pesos.peso2}
                    imagen = {imgf80}
                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Wi(KWh/t)'
                    pesos = {pesos.peso3}
                    imagen = {imgwi}

                    />
                </div>
                <div>
                    <BadgeCaja
                    nombre = 'Potencia'
                    pesos = {pesos.peso4}
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
