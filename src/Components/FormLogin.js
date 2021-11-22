import React from 'react'
import './Styles/FormLogin.css'

const FormLogin = () => {
    return (
            <div className="bordeFormLogin">
                <div className="TituloLogin">
                    <h4>Login</h4>
                </div>
                <div className="GeneralCuerpoFormLogin">
                    <div>
                        <label htmlFor="">Email: </label>
                        <input 
                            type="text"
                            name= ""
                            value= ""

                            />
                    </div>
                    <div>
                        <label htmlFor="">Password: </label>
                        <input 
                            type="text"
                            name= ""
                            value= ""

                            />
                    </div>
                    <div className="BotonLogin">
                        <button>
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        
    )
}

export default FormLogin
