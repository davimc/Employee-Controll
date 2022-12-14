import axios from 'axios'
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";

import './styles.css'

function EmployeeCard() {


    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        // const dMin = minDate.toISOString().slice(0,10)
        // const dMax = maxDate.toISOString().slice(0,10)
        // axios.get(`${BASE_URL}/licenses?dtMin=${dMin}&dtMax=${dMax}`)
        //     .then(response => {(setLicenses(response.data.content))})
    })

    return (
        <div className="emplocontrol-card">
        <h2 className="emplocontrol-licenses-title">Funcionários</h2>
        <div>
        <div className="emplocontrol-form-control-container">
        <form action="" method='get'>
            <label htmlFor="get-employee">Nome ou CPF</label>
            <input type="text" id='get-employee'/>
            <label htmlFor="get-active-employee"></label>
            <input type="checkbox" id='get-active-employee' checked/>
        </form>
        </div>
        <div className="emplocontrol-form-control-container">
        
        </div>
        </div>

        <div>
        <table className="emplocontrol-licenses-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th>Funcionário</th>
                <th className="show576">CPF</th>
                <th className="show992">Loja</th>
                <th className="show576">Ativo</th>
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

export default EmployeeCard