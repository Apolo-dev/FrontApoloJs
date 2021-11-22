import React, {useState} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'
import TablaRespuestaLab from '../Components/TablaRespuestaLab'
import getUnixTime from 'date-fns/getUnixTime'

const ApiUrl = 'http://127.0.0.1:8000/api/pesos/'

const PaginaLab = () => {

    const initialState = {v1:'', v2:'',v3:'', v4:'',v5:'', v6:'',v7:'', v8:'',v9:'', v10:'',v11:'', v12:'',v13:'', v14:'',v15:'', v16:'', v17:'', }


    const handleChange = (e)=>
    {
        setPeso({...peso, [e.target.name]:parseFloat(e.target.value)})
    }

    const [peso, setPeso] = useState(initialState)
    const [sumatoria, setSumatoria] = useState('')
    //const [retenido, setRetenido] = useState('')
    //const [fecha , setFecha ] = useState(new Date())

    const fecha = new Date()


    const suma = peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 + peso.v16 + peso.v17

    console.log(getUnixTime(fecha));

    

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
                        fechaActual: new Date()

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
            res = await savePesos()
            const data = await res.json()
            console.log(data);
            
            
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
