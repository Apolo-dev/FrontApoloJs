import React from 'react'
import './Styles/Form.css'

const Form = ({handleSubmit, handleChange}) => {
    return (
        <div className="card contenido">
            <div className="card-header titulillo">
                <h3>Formulario</h3>
            </div>
            
                <form className="card-body" name="formulario" onSubmit={handleSubmit}>
                    <div className="form-group separar">
                        <input className="form-control" 
                        type="text" 
                        placeholder="Wi" 
                        name="wi"  
                        onChange={handleChange} />
                    </div>
                    <div className="form-group separar">
                        <input className="form-control" 
                        type="text" 
                        placeholder="P80"
                        name="wi"  
                        onChange={handleChange} />
                    </div>
                    <div className="form-group separar">
                        <input className="form-control" 
                        type="text" 
                        placeholder="F80" 
                        name="wi"  
                        onChange={handleChange} />
                    </div>
                    <div className="contBotoncito">
                        <button className="btn btn-danger separar botoncito">
                            Enviar
                        </button>
                    </div>
                </form>

            
            
        </div>
    )
}

export default Form
