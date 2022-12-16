import axios from 'axios'
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";

import './styles.css'
import { Store } from '../../../models/Store';

function StoreCard() {

    const [employees, setEmployees] = useState<Store[]>([])

    // useEffect(() => {
        // const dMin = minDate.toISOString().slice(0,10)
        // const dMax = maxDate.toISOString().slice(0,10)
        // axios.get(`${BASE_URL}/licenses?dtMin=${dMin}&dtMax=${dMax}`)
        //     .then(response => {(setLicenses(response.data.content))})
    // })

    return (
        <div className="emplocontrol-card">
            
        <h2 className="emplocontrol-licenses-title">Lojas</h2>
        <div>
            <div className="emplocontrol-form-control-container">
                <input type="text" id='get-store' className='emplocontrol-form-control' placeholder='Nome'/>
            </div>
        </div>

        <div>
        <table className="emplocontrol-licenses-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th>Loja</th>
                <th className="show576">Qtd Atual</th>
                <th className="show992">Qtd Original</th>
                
                <th>Visualizar</th>
            </tr>
            </thead>
            <tbody>
                {employees.map(employee => {
                    return(
                        <tr key={employee.id}>
                            <td className="show992">{employee.id}</td>
                            <td>{employee.name}</td>
                            <td className="show576">{employee.cpf}</td>
                            <td className="show992">{employee.store}</td>
                            <td className="show576">{employee.dtResignation == null ? "Ativo":"Desligado"}</td>
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

export default StoreCard