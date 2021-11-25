import React from 'react'
import './Styles/Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="listasSidebar">
            <h5 className="tituloGenerald">Apolo Minning</h5>
            <div>
                <li><Link to="/reportes">Reportes</Link></li>
                <li><Link to="/lab">Laboratorio</Link></li>
                <li><Link to="/form">Formulario</Link></li>
            </div>
        </div>
    )
}

export default Sidebar
