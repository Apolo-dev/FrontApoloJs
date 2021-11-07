import React, {useState} from 'react'
import './CSS/PaginaReportes.css'
import './CSS/PaginaForm.css'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Logo from './../Images/logito.png'
import Form from '../Components/Form'


const PaginaForm = () => {


    const [wi, setWi] = useState('')
    const [p80, setP80] = useState('')
    const [f80, setF80] = useState('')


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
                    wi={wi}
                    p80={p80}
                    f80={f80}
                    
                    
                    />
                </div>
                <div>
                    ssd
                </div>
            </div>
        </div>
    )
}

export default PaginaForm
