import React from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'

const PaginaLab = () => {
    return (
        <div className="gridGeneral">
            <div className="tamañoLogo">
                <img src={Logo} alt="logo" />
            </div>
            <>
                <Navbar />
            </>
            <>
                <Sidebar />
            </>
            <div>
                <TablaGiratorio />
            </div>
        </div>
    )
}

export default PaginaLab
