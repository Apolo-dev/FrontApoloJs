import React, {useState, useEffect} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import CuerpoReportes from '../Components/CuerpoReportes'

const apiPesos = 'http://127.0.0.1:8000/api/pesos/'



const PaginaReporte = () => {

    const [datosPesos, setDatosPesos] = useState([])

    // estado para fecha 

    const [fecha, setFecha] = useState(new Date())

    const getpesos = async ()=>
    {
        try
        {
            const res = await fetch(apiPesos)
            const data = await res.json()
            setDatosPesos(data)    
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        return getpesos()
    }, [fecha])
    


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
            <div className="generalCuerpoRepors">
                <CuerpoReportes
                fecha={fecha}
                setFecha={setFecha}
                datosPesos={datosPesos}
                />
            </div>
        </div>
    )
}

export default PaginaReporte
