import axios from 'axios'
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { Request } from "../../../models/Request";
import Head from '../ElementsHead'
import Table from '../ElementsTable'

import '../elementsGlobalStyles.css'

function RequestCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()
                                                                                                            
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 

    const [requests, setRequests] = useState<Request[]>([])
    const tbHead = new Map<string, number>([
        ['ID',2],
        ['Funcionário', 0],
        ['Data Início',1],
        ['Data Fim', 2],
        ['Ativo',1]
    ])

    useEffect(() => {
        const dMin = minDate.toISOString().slice(0,10)
        const dMax = maxDate.toISOString().slice(0,10)
        axios.get(`${BASE_URL}/requests}`)
            .then(response => {(setRequests(response.data.content))})
    }), [minDate, maxDate]

    return (
        <>
        <Head title='Licenças'>
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
        <Table tbHead={tbHead}>        
                {requests.map(request => {
                    return(
                        <tr key={request.id}>
                            <td className="show992">{request.id}</td>
                            <td>{request.employeeName}</td>
                            <td className="show576">{new Date(request.dtStart).toLocaleDateString()}</td>
                            <td className="show992">{new Date(request.dtEnd == null? 
                                request.dtExpected : 
                                request.dtEnd).toLocaleDateString()}</td>
                            <td className="show576">{request.dtEnd == null ? "Ativo":"Concluído"}</td>
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
    </>
    )
}

export default RequestCard