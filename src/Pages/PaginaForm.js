import React from 'react'
import './CSS/PaginaReportes.css'
import './CSS/PaginaForm.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import Form from '../Components/Form'


const PaginaForm = () => {


   


    const handleSubmit = (e)=>
    {
        e.preventDefault()
        console.log('olissss');
    }

    const handleChange = (e)=>
    {
        if(e.target.name === 'wi')
        {
            console.log(e.target.value);
        }
        else if(e.target.name==='p80')
        {
            console.log(e.target.value);
        }
        else if(e.target.name === 'f80')
        {
            console.log(e.target.value);
        }
        else
        {
            console.log('otra vola');
        }
    }

    // para tabla pruebas 

    const algo = [
        {
            equipo: 'River',
            pais: 'Argentina',
            copas: 30
        },
        {
            equipo: 'Sao Paulo',
            pais: 'Brasil',
            copas: 88
        },

    ]
    





    return (
        <div className="gridGeneral">
            <div className="tamañoLogo">
                <img src={Logo} alt="logo" />
            </div>
            <>
                <Navbar />
            </>
            <>
                <Sidebar />
            </>
            <div className="gridForm">
                <div>
                    <Form 
                    handleSumbit={handleSubmit}
                    handleChange={handleChange}
                    
                    
                    
                    />
                </div>
                <div className ="tablaejemplosd">
                    <table>
                        <tr>
                            <th>Equipo</th>
                            <th>Pais</th>
                            <th>Copas</th>
                        </tr>
                        <tr>
                            {algo.map((element)=>
                            {
                                return <tr>
                                        <tr>
                                            <td>
                                                {element.equipo}
                                            </td>
                                            <td>
                                                {element.pais}
                                            </td>
                                            <td>
                                                {element.copas}
                                            </td>
                                        </tr> 
                                    </tr>
                            })}
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PaginaForm
