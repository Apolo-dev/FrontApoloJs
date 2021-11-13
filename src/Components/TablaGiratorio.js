import React from 'react'
import './Styles/TablaGiratorio.css'

const TablaGiratorio = ({handleChange, peso, sumatoria, handleClickSumatoria, datos}) => {

    console.log(datos[0].peso1);

    return (
        <div className="GenerralTablaGiratorio">
            <form  className="estilosFormulario">
                <table>
                    <tr className="titulosTabla">
                        <th>
                            Malla
                        </th>
                        <th>
                            Abertura(micras)
                        </th>
                        <th>
                            Peso Retenido (g)
                        </th>
                        <th>
                            Retenido (%)
                        </th>
                        <th>
                            Retenido Acumulado (%)
                        </th>
                        <th>
                            Pasante (%)
                        </th>
                        
                    </tr>
                    
                    <tr className="cuerpoTabla">
                        <td>3/8</td>
                        <td>9500</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v1}
                                name = "v1"
                                />
                        </td>
                        <td>{datos[0].peso1}</td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>3</td>
                        <td>6700</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v2}
                                name = "v2"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>4</td>
                        <td>4750</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v3}
                                name = "v3"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>6</td>
                        <td>3350</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v4}
                                name = "v4"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>8</td>
                        <td>2360</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v5}
                                name = "v5"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>10</td>
                        <td>1700</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v6}
                                name = "v6"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>14</td>
                        <td>1180</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v7}
                                name = "v7"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>20</td>
                        <td>850</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v8}
                                name = "v8"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>28</td>
                        <td>600</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v9}
                                name = "v9"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>35</td>
                        <td>425</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v10}
                                name = "v10"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>48</td>
                        <td>300</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v11}
                                name = "v11"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>65</td>
                        <td>212</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v12}
                                name = "v12"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>100</td>
                        <td>150</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v13}
                                name = "v13"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>150</td>
                        <td>106</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v14}
                                name = "v14"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>200</td>
                        <td>75</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v15}
                                name = "v15"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>270</td>
                        <td>53</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v16}
                                name = "v16"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>-270</td>
                        <td>Bandeja</td>
                        <td><input 
                                type="number" 
                                onChange={handleChange} 
                                className="inputTablaGprimario"
                                value={peso.v17}
                                name = "v17"
                                />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr >
                    <tr className="cuerpoTabla">
                        <td></td>
                        <td>Total</td>
                        <td>{sumatoria}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr >
                    
                </table>
                <div className="botnTablaCalcular" onClick = {handleClickSumatoria}>
                        <button>
                            Calcular
                        </button>
                </div>
            </form>
            
        </div>
    )
}

export default TablaGiratorio
