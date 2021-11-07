import React from 'react'
import './Styles/TablaGiratorio.css'

const TablaGiratorio = ({handleChange, handleSubmit}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="estilosFormulario">
                <table>
                    <tr className="titulosTabla">
                        <th>
                            Malla
                        </th>
                        <th>
                            Abertura(micras)
                        </th>
                        <th>
                            Peso (%)
                        </th>
                        <th>
                            Acumulado (%)
                        </th>
                        <th>
                            Pasante (%)
                        </th>
                        <th>
                            Peso (%)
                        </th>
                        <th>
                            Acumulado (%)
                        </th>
                        <th>
                            Pasante (%)
                        </th>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>1,06</td>
                        <td>17960</td>
                        <td><input type="number" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange}  className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>1/2</td>
                        <td>12700</td>
                        <td><input type="number" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>3/8</td>
                        <td>9500</td>
                        <td><input type="number" onChange={handleChange}   className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>3</td>
                        <td>6700</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>4</td>
                        <td>4750</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>6</td>
                        <td>3350</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>8</td>
                        <td>2360</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>10</td>
                        <td>1700</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>14</td>
                        <td>1180</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>20</td>
                        <td>850</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>28</td>
                        <td>600</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>35</td>
                        <td>425</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>48</td>
                        <td>300</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>65</td>
                        <td>212</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>100</td>
                        <td>150</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>150</td>
                        <td>106</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>200</td>
                        <td>75</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>270</td>
                        <td>53</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr className="cuerpoTabla">
                        <td>-270</td>
                        <td>ss</td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td></td>
                        <td><input type="text" onChange={handleChange} className="inputTablaGprimario"/></td>
                        <td></td>
                        <td>sssss</td>
                    </tr >
                </table>
                <div className="gridBotoncetess">
                    <div className="botnTablaGranu">
                        <button  className="btn btn-warning">
                            Calcular
                        </button>
                    </div>
                    <div className="botnTablaGranu">
                        <button className="btn btn-danger">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default TablaGiratorio
