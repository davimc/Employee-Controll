import axios from 'axios'
import {useMemo, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { License } from "../../../models/License";
import Head from '../ElementsHead'
import Table from '../ElementsTable'

import '../elementsGlobalStyles.css'

function LicenseCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()
                                                                                                            
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 

    const [licenses, setLicenses] = useState<License[]>([])
    const tbHead = new Map<string, number> ([
        ['ID',2],
        ['Funcionário', 0],
        ['Data Início',1],
        ['Data Fim', 2],
        ['Motivo',0],
        ['Ativo',1]
    ])
    const dMin = minDate.toISOString().slice(0,10)
    const dMax = maxDate.toISOString().slice(0,10)
    const memo = useMemo(() => {
        axios.get(`${BASE_URL}/licenses?dtMin=${dMin}&dtMax=${dMax}`)
            .then(response => {(setLicenses(response.data.content))})
    }, [minDate, maxDate])

    return ( 
        <Head title='Licenças'>
            <div className='col-container'>
                <div className="emplocontrol-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => {setMinDate(date)}}
                        className="emplocontrol-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="emplocontrol-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => {setMaxDate(date)}}
                        className="emplocontrol-form-control"
                        dateFormat="dd/MM/yyyy"
                    />

                </div>
            </div>
            <Table tbHead={tbHead}>        
                {licenses.map(license => {
                    return(
                        <tr key={license.id}>
                            <td className="show992">{license.id}</td>
                            <td>{license.employeeName}</td>
                            <td className="show576">{new Date(license.dtStart).toLocaleDateString()}</td>
                            <td className="show992">{new Date(license.dtEnd == null? 
                                license.dtExpected : 
                                license.dtEnd).toLocaleDateString()}</td>
                            <td className='show576'>{license.reason}</td>
                            <td className="show576">{license.dtEnd == null ? "Ativo":"Concluído"}</td>
                            <td>
                                <div className="emplocontrol-red-btn-container">
                                    <ViewButton />
                                </div>
                            </td>
                        </tr>  
            )
            })}
        </Table>
    </Head>
    )
}

export default LicenseCard