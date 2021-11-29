import React, {useState} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'
import TablaRespuestaLab from '../Components/TablaRespuestaLab'
import getUnixTime from 'date-fns/getUnixTime'

import endOfDay from 'date-fns/endOfDay'

const ApiUrl = 'http://127.0.0.1:8000/api/pesos/'
const apiUrlAbertura = 'http://127.0.0.1:8000/api/aberturas/'

const PaginaLab = () => {

    const initialState = {v1:'', v2:'',v3:'', v4:'',v5:'', v6:'',v7:'', v8:'',v9:'', v10:'',v11:'', v12:'',v13:'', v14:'',v15:'', v16:'', v17:'', }


    const handleChange = (e)=>
    {
        setPeso({...peso, [e.target.name]:parseFloat(e.target.value)})
    }

    const [peso, setPeso] = useState(initialState)
    const [sumatoria, setSumatoria] = useState('')
    

    const fecha = new Date()


    const suma = peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 + peso.v16 + peso.v17

    //const suma = typeof

    const finalDia = endOfDay(fecha)
    const fechaFinal = getUnixTime(finalDia)

    

    const savePesos = async ()=>
    {
        return await fetch(ApiUrl, 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {
                        peso1: peso.v1,
                        peso2:peso.v2,
                        peso3: peso.v3,
                        peso4:peso.v4,
                        peso5: peso.v5,
                        peso6: peso.v6,
                        peso7: peso.v7,
                        peso8: peso.v8,
                        peso9: peso.v9,
                        peso10: peso.v10,
                        peso11: peso.v11,
                        peso12: peso.v12,
                        peso13: peso.v13,
                        peso14: peso.v14,
                        peso15: peso.v15,
                        peso16: peso.v16,
                        peso17: peso.v17,
                        fechaActual: fechaFinal

                    })
            })
    }

    // para guardar las aberturas

    const SaveAberturas = async ()=>
    {
        return await fetch(apiUrlAbertura, 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(
                    {
                        abertura1: 9500,
                        abertura2: 6700,
                        abertura3: 4750,
                        abertura4: 3350,
                        abertura5: 2360,
                        abertura6: 1700,
                        abertura7: 1180,
                        abertura8: 850,
                        abertura9: 600,
                        abertura10: 425,
                        abertura11: 300,
                        abertura12: 212,
                        abertura13: 150,
                        abertura14: 106,
                        abertura15: 75,
                        abertura16: 53,
                        Bandeja: 0,
                        fechaActual: fechaFinal

                    })
            })
    }



    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        setSumatoria(suma)

        try
        {
            let res;
            let res2;
            res = await savePesos()
            res2 = await SaveAberturas()
            const data = await res.json()
            const data2 = await res2.json()
            console.log(data);
            console.log(data2);
            
            
        }catch(error)
        {
            console.log(error);
        }
        
    }


    return (
        <div className="gridGeneral">
            <div className="tamañoLogo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <>
                <Sidebar />
            </>
            <div className="gridTablaRespuesta">
                <div>
                    <TablaGiratorio
                    handleChange={handleChange}
                    peso={peso}
                    handleSubmit={handleSubmit}
                    sumatoria={sumatoria}
                    
                    
                    />
                </div>
                <>
                    <TablaRespuestaLab />
                </>
            </div>
            
        </div>
    )
}

export default PaginaLab
