import React, {useState, useEffect} from 'react'
import './Styles/CalendarioReportes.css'
import logocalendario from './../Images/segundocale.png'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { es } from 'date-fns/locale'
//import useObtenerPesos from '../Hooks/useObtenerPesos';

//import fromUnixTime from 'date-fns/fromUnixTime'
import getUnixTime from 'date-fns/getUnixTime'



const parseDate = (str, format)=> {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

const formatDate = (date, format) => {
  return dateFnsFormat(date, format, { locale: es });
}

const meses = ['Enero',	'Febrero', 'Marzo',	'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];




const CalendarioReportes = () => {

    const [fecha, setFecha] = useState(new Date())

    const [pesos, setPesos] = useState([])

    const fechaFinal = getUnixTime(fecha)


    const apiPesos = 'http://127.0.0.1:8000/api/pesos/1637876219/'

    const getPesos = async ()=>
    {
        try
        {
            const res = await fetch(apiPesos)
            const data = await res.json()
            setPesos(data)    
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(()=>
    {   
        console.log(pesos);
        return getPesos()
    }, [fecha])

    

    useEffect(()=>
    {
        console.log(fechaFinal);
    }, [fecha])



    //console.log((fecha));
    //console.log(pesos);




    return (
        <div className="calendarioReporte">
            <div>
                <DayPickerInput
                value = {fecha}
                onDayChange={(day)=> setFecha(day)}
                format="dd/MM/yyyy"
                formatDate={formatDate}
                parseDate= {parseDate}

                dayPickerProps = {
                    {
                        months: meses,
                        weekdaysShort: dias_semana_cortos
                    }
                }
                
                />
            </div>
            <div className="logocalendario">
                <img src={logocalendario} alt="logo" />
            </div>
        </div>
    )
}

export default CalendarioReportes
