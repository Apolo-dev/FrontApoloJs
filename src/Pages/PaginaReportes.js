import React, {useState, useEffect} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import CuerpoReportes from '../Components/CuerpoReportes'

const apiPesos = 'http://127.0.0.1:8000/api/pesos/'
const apiAberturas = 'http://127.0.0.1:8000/api/aberturas/'


const PaginaReporte = () => {

    const [datosPesos, setDatosPesos] = useState([])
    const [datosAbertura, setDatosAbertura] = useState([])

    const getpesos = async ()=>
    {
        try
        {
            const res = await fetch(apiPesos)
            const res2 = await fetch(apiAberturas)
            const data = await res.json()
            const data2 = await res2.json()
            setDatosPesos(data)
            setDatosAbertura(data2)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        return getpesos()
    }, [])

    

    


    return (
        <div className="gridGeneral">
            <div className="tamañoLogo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <>
                <Sidebar />
            </>
            <div>
                <CuerpoReportes
                //getPesos={getPesos()}
                datosPesos={datosPesos}
                datosAbertura={datosAbertura}
                />
            </div>
        </div>
    )
}

export default PaginaReporte
