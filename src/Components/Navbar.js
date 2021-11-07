import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className="navGeneral">
            <ul>
                <li><Link to="">Home</Link></li>
                <li><Link to="">Perfil</Link></li>
                <li><Link to="/">Cerrar Sesion</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
