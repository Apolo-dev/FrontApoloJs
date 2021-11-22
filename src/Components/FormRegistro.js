import React from 'react'
import './Styles/FormRegistro.css'

import { Link } from 'react-router-dom'

const FormRegistro = () => {
    return (
        <div className="bordeFormRegistro">
            <form action="">
                <div className="tituloFormRegistro">
                    <h2>Registro</h2>
                </div>
                <div className="CuerpoFormRegistro">
                    <div>
                        <label htmlFor="">Nombre: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            />
                    </div>
                    <div>
                        <label htmlFor="">Apellido: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            
                            />
                    </div>
                    <div>
                        <label htmlFor="">Email: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            />
                    </div>
                    <div>
                        <label htmlFor="">Empresa: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            />
                    </div>
                    <div>
                        <label htmlFor="">Repetir Password: </label>
                        <input 
                            type="text"
                            name=""
                            value=""
                            />
                    </div>
                    <div className="paraffoRegistro">
                        <p>¿Ya tienes Cuenta? ingresa en <Link to="/login">Login</Link></p>
                    </div>
                    <div className="botReg">
                        <button className="botonFormRegistro">
                            Enviar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormRegistro
