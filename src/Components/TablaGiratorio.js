import React from 'react'
import './Styles/TablaGiratorio.css'

const TablaGiratorio = ({handleChange, peso, handleSubmit, sumatoria}) => {

    const rete1 = ((peso.v1*100)/sumatoria).toFixed(2)
    const rete2 = ((peso.v2*100)/sumatoria).toFixed(2)
    const rete3 = ((peso.v3*100)/sumatoria).toFixed(2)
    const rete4 = ((peso.v4*100)/sumatoria).toFixed(2)
    const rete5 = ((peso.v5*100)/sumatoria).toFixed(2)
    const rete6 = ((peso.v6*100)/sumatoria).toFixed(2)
    const rete7 = ((peso.v7*100)/sumatoria).toFixed(2)
    const rete8 = ((peso.v8*100)/sumatoria).toFixed(2)
    const rete9 = ((peso.v9*100)/sumatoria).toFixed(2)
    const rete10 = ((peso.v10*100)/sumatoria).toFixed(2)
    const rete11 = ((peso.v11*100)/sumatoria).toFixed(2)
    const rete12 = ((peso.v12*100)/sumatoria).toFixed(2)
    const rete13 = ((peso.v13*100)/sumatoria).toFixed(2)
    const rete14 = ((peso.v14*100)/sumatoria).toFixed(2)
    const rete15 = ((peso.v15*100)/sumatoria).toFixed(2)
    const rete16 = ((peso.v16*100)/sumatoria).toFixed(2)
    const rete17 = ((peso.v17*100)/sumatoria).toFixed(2)


    const acumu1 = ((peso.v1*100)/sumatoria).toFixed(2)
    const acumu2 = (((peso.v1 + peso.v2)*100)/sumatoria).toFixed(2)
    const acumu3 = (((peso.v1 + peso.v2 + peso.v3 )*100)/sumatoria).toFixed(2)
    const acumu4 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 )*100)/sumatoria).toFixed(2)
    const acumu5 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 )*100)/sumatoria).toFixed(2)
    const acumu6 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 )*100)/sumatoria).toFixed(2)
    const acumu7 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 )*100)/sumatoria).toFixed(2)

    const acumu8 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 )*100)/sumatoria).toFixed(2)
    const acumu9 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 )*100)/sumatoria).toFixed(2)

    const acumu10 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10)*100)/sumatoria).toFixed(2)

    const acumu11 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11)*100)/sumatoria).toFixed(2)

    const acumu12 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 )*100)/sumatoria).toFixed(2)

    const acumu13 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13)*100)/sumatoria).toFixed(2)

    const acumu14 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 )*100)/sumatoria).toFixed(2)
    
    const acumu15 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 )*100)/sumatoria).toFixed(2)

    const acumu16 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 + peso.v16)*100)/sumatoria).toFixed(2)

    const acumu17 = (((peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 + peso.v16 + peso.v17)*100)/sumatoria).toFixed(2)





    return (
        <div className="GenerralTablaGiratorio">
            <form  className="estilosFormulario" onSubmit={handleSubmit}>
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
                        <td>{rete1}</td>
                        <td>{acumu1}</td>
                        <td>{(100-acumu1).toFixed(2)}</td>
                        
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
                        <td>{rete2}</td>
                        <td>{acumu2}</td>
                        <td>{(100-acumu2).toFixed(2)}</td>
                        
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
                        <td>{rete3}</td>
                        <td>{acumu3}</td>
                        <td>{(100-acumu3).toFixed(2)}</td>
                        
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
                        <td>{rete4}</td>
                        <td>{acumu4}</td>
                        <td>{(100-acumu4).toFixed(2)}</td>
                        
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
                        <td>{rete5}</td>
                        <td>{acumu5}</td>
                        <td>{(100-acumu5).toFixed(2)}</td>
                        
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
                        <td>{rete6}</td>
                        <td>{acumu6}</td>
                        <td>{(100-acumu6).toFixed(2)}</td>
                        
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
                        <td>{rete7}</td>
                        <td>{acumu7}</td>
                        <td>{(100-acumu7).toFixed(2)}</td>
                        
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
                        <td>{rete8}</td>
                        <td>{acumu8}</td>
                        <td>{(100-acumu8).toFixed(2)}</td>
                        
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
                        <td>{rete9}</td>
                        <td>{acumu9}</td>
                        <td>{(100-acumu9).toFixed(2)}</td>
                        
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
                        <td>{rete10}</td>
                        <td>{acumu10}</td>
                        <td>{(100-acumu10).toFixed(2)}</td>
                        
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
                        <td>{rete11}</td>
                        <td>{acumu11}</td>
                        <td>{(100-acumu11).toFixed(2)}</td>
                        
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
                        <td>{rete12}</td>
                        <td>{acumu12}</td>
                        <td>{(100-acumu12).toFixed(2)}</td>
                        
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
                        <td>{rete13}</td>
                        <td>{acumu13}</td>
                        <td>{(100-acumu13).toFixed(2)}</td>
                        
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
                        <td>{rete14}</td>
                        <td>{acumu14}</td>
                        <td>{(100-acumu14).toFixed(2)}</td>
                        
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
                        <td>{rete15}</td>
                        <td>{acumu15}</td>
                        <td>{(100-acumu15).toFixed(2)}</td>
                        
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
                        <td>{rete16}</td>
                        <td>{acumu16}</td>
                        <td>{(100-acumu16).toFixed(2)}</td>
                        
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
                        <td>{rete17}</td>
                        <td>{acumu17}</td>
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
                <div className="botnTablaCalcular" >
                        <button>
                            Calcular
                        </button>
                </div>
            </form>
            
        </div>
    )
}

export default TablaGiratorio
