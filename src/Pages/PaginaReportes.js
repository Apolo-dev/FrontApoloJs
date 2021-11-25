import React from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import CuerpoReportes from '../Components/CuerpoReportes'



const PaginaReporte = () => {


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
                //fecha={fecha}
                //setFecha={setFecha}
                />
            </div>
        </div>
    )
}

export default PaginaReporte
