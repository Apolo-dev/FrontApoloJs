import React from 'react'
import './Styles/CalendarioReportes.css'
import logocalendario from './../Images/segundocale.png'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import { es } from 'date-fns/locale'

//import getUnixTime from 'date-fns/getUnixTime'



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




const CalendarioReportes = ({fecha, setFecha}) => {


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
