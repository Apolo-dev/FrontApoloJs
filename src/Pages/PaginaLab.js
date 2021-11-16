import React, {useState} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'
import TablaRespuestaLab from '../Components/TablaRespuestaLab'



const PaginaLab = () => {

    const initialState = {v1:'', v2:'',v3:'', v4:'',v5:'', v6:'',v7:'', v8:'',v9:'', v10:'',v11:'', v12:'',v13:'', v14:'',v15:'', v16:'', v17:'', }


    const handleChange = (e)=>
    {
        setPeso({...peso, [e.target.name]:parseFloat(e.target.value)})
    }

    const [peso, setPeso] = useState(initialState)
    const [sumatoria, setSumatoria] = useState('')
    //const [retenido, setRetenido] = useState('')


    const suma = peso.v1 + peso.v2 + peso.v3 + peso.v4 + peso.v5 + peso.v6 + peso.v7 + peso.v8 + peso.v9 + peso.v10 + peso.v11 + peso.v12 + peso.v13 + peso.v14 + peso.v15 + peso.v16 + peso.v17

    //const ret1 = ((peso.v1*100)/sumatoria).toFixed(2)



    const handleSubmit = async (e)=>
    {
        e.preventDefault()
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
