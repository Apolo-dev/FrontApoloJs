import React from 'react'
import BadgeCaja from './BadgeCaja'
import './Styles/CuerpoReportes.css'

const CuerpoReportes = () => {
    return (
        <div className="gridReportes">
            <div className="gridCajasReportes">
                <div>
                    <BadgeCaja />
                </div>
                <div>
                    <BadgeCaja />
                </div>
                <div>
                    <BadgeCaja />
                </div>
                <div>
                    <BadgeCaja />
                </div>
            </div>
            <div className="gridGraficosReportes">
                <div>
                    grafico1
                </div>
                <div>
                    grafico1
                </div>
                <div>
                    grafico1
                </div>
            </div>
        </div>
    )
}

export default CuerpoReportes
