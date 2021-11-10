import React from 'react'
import './Styles/Sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="listasSidebar">
            <h5 className="tituloGenerald">Apolo Minning</h5>
            <ul >
                <li><Link to="/reportes">Reportes</Link></li>
                <li><Link to="/lab">Laboratorio</Link></li>
                <li><Link to="/form">formulario</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
