import axios from 'axios'
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../ViewButton";
import { BASE_URL } from "../../utils/request";
import { License } from "../../models/License";

import './styles.css'

function EmployeeCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 

    const [licenses, setLicenses] = useState<License[]>([])

    useEffect(() => {
        const dMin = minDate.toISOString().slice(0,10)
        const dMax = maxDate.toISOString().slice(0,10)
        axios.get(`${BASE_URL}/licenses?dtMin=${dMin}&dtMax=${dMax}`)
            .then(response => {(setLicenses(response.data.content))})
    }), [minDate, maxDate]

    return (
        <div className="emplocontrol-card">
        <h2 className="emplocontrol-sales-title">Funcionários</h2>
        <div>
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

        <div>
        <table className="emplocontrol-sales-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th>Funcionário</th>
                <th className="show576">Data Início</th>
                <th className="show576">Data Fim</th>
                <th className="show992">Ativo</th>
                <th>Visualizar</th>
            </tr>
            </thead>
            <tbody>
                {licenses.map(license => {
                    return(
                        <tr key={license.id}>
                            <td className="show992">{license.id}</td>
                            <td>{license.employeeName}</td>
                            <td className="show576">{new Date(license.dtStart).toLocaleDateString()}</td>
                            <td className="show992">{new Date(license.dtEnd == null? 
                                license.dtExpected : 
                                license.dtEnd).toLocaleDateString()}</td>
                            <td className="show992">{license.dtEnd == null ? "Ativo":"Concluído"}</td>
                            <td>
                                <div className="emplocontrol-red-btn-container">
                                        <ViewButton />
                                </div>
                            </td>
                        </tr>  
                )
                })}
            </tbody>

        </table>
        </div>

    </div>
    )
}

export default EmployeeCard