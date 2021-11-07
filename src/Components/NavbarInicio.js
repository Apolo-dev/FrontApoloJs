import React from 'react'
import './Styles/NavbarInicio.css'
import { Link } from 'react-router-dom'


const NavbarInicio = () => {
    return (
        <nav className="navInicio">
                <ul>
                    <li><Link to="/reportes">Iniciar Sesion</Link></li>
                    <li><Link to="/registro">Registro</Link></li>
                </ul>
        </nav>
    )
}

export default NavbarInicio
