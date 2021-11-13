import React, {useState, useEffect} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'
import TablaRespuestaLab from '../Components/TablaRespuestaLab'

const ApiUrl = 'http://127.0.0.1:8000/api/pesos/'

const PaginaLab = () => {

    const initialState = {v1:'', v2:'',v3:'', v4:'',v5:'', v6:'',v7:'', v8:'',v9:'', v10:'',v11:'', v12:'',v13:'', v14:'',v15:'', v16:'', v17:'', }

    const [peso, setPeso] = useState(initialState)
    const [sumatoria, setSumatoria] = useState('')
    //const [retenido, setRetenido] = useState('')

    const [datos, setDatos] = useState([])

    // hacer el fetch

    const getPesos = async ()=>
    {
        try
        {
            const res = await fetch(ApiUrl)
            const data = await res.json()
            console.log(data);
            setDatos(data)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {
        console.log(getPesos());
    }, [])



    




    const handleChange = (e)=>
    {
        setPeso({...peso, [e.target.name]:e.target.value})
    }

    const peso1 = parseInt(peso.v1)
    const peso2 = parseInt(peso.v2)
    const peso3 = parseInt(peso.v3)
    const peso4 = parseInt(peso.v4)
    const peso5 = parseInt(peso.v5)
    const peso6 = parseInt(peso.v6)
    const peso7 = parseInt(peso.v7)
    const peso8 = parseInt(peso.v8)
    const peso9 = parseInt(peso.v9)
    const peso10 = parseInt(peso.v10)
    const peso11 = parseInt(peso.v11)
    const peso12 = parseInt(peso.v12)
    const peso13 = parseInt(peso.v13)
    const peso14 = parseInt(peso.v14)
    const peso15 = parseInt(peso.v15)
    const peso16 = parseInt(peso.v16)
    const peso17 = parseInt(peso.v17)

    const suma = peso1 + peso2 + peso3 + peso4 + peso5 + peso6 + peso7 + peso8 + peso9 + peso10 + peso11 + peso12 + peso13 + peso14 + peso15 + peso16 + peso17

    

    
    

    

    




    const handleClickSumatoria = (e)=>
    {
        e.preventDefault()
        //console.log(ret);
        setSumatoria(suma)
    }



    

    return (
        <div className="gridGeneral">
            <div className="tamañoLogo">
                <img src={Logo} alt="logo" />
            </div>
            <div>
                <Navbar />
            </div>
            <div>
                <Sidebar />
            </div>
            <div className="gridTablaRespuesta">
                <div>
                    <TablaGiratorio
                    handleChange={handleChange}
                    peso={peso}
                    sumatoria = {sumatoria}
                    handleClickSumatoria = {handleClickSumatoria}
                    datos={datos}
                    
                    
                    
                    />
                </div>
                <div>
                    <TablaRespuestaLab />
                </div>
            </div>
            
        </div>
    )
}

export default PaginaLab
