import React, {useState} from 'react'
import './CSS/PaginaReportes.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import TablaGiratorio from '../Components/TablaGiratorio'

const PaginaLab = () => {

    const initialState = {v1:'', v2:'',v3:'', v4:'',v5:'', v6:'',v7:'', v8:'',v9:'', v10:'',v11:'', v12:'',v13:'', v14:'',v15:'', v16:'', v17:'',v18:'', v19:'' }

    const [peso, setPeso] = useState(initialState)


    const handleChange = (e)=>
    {
        //console.log(e.target.name);
        //console.log(e.target.value);

        setPeso({...peso, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        console.log(peso);
    }



    

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
            <div>
                <TablaGiratorio
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                peso={peso}
                
                
                />
            </div>
        </div>
    )
}

export default PaginaLab
