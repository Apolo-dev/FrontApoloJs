import React from 'react'
import NavbarInicio from '../Components/NavbarInicio'
import './CSS/PaginaInicio.css'

//import imagenfondo from '../Images/molienda.jpg'

const PaginaInicio = () => {
    return (
        <div className="gridInicio">
            <div>
                <NavbarInicio />
            </div>
            <div className="fondoInicio">
                <div className="imagenFondodini">
                    olis
                </div>
            </div>
        </div>
    )
}

export default PaginaInicio
