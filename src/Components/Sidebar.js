import React from 'react'
import './Styles/Sidebar.css'
import { Link } from 'react-router-dom'

import logoRepor from '../Images/logoReport.png'
import logolab from '../Images/logolaboratoro.png'

const Sidebar = () => {
    return (
        <div className="listasSidebar">
            <h5 className="tituloGenerald">Apolo Minning</h5>
            <div>
                <li><div><img src={logoRepor} alt="logorepo" /></div><Link to="/reportes">Reportes</Link></li>
                <li><div><img src={logolab} alt="logolab" /></div><Link to="/lab">Laboratorio</Link></li>
            </div>
        </div>
    )
}

export default Sidebar
