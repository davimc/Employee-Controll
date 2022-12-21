import axios from 'axios'
import { useEffect, useState } from "react"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton"
import { BASE_URL } from "../../../utils/request"

import './styles.css'
import { Employee } from '../../../models/Employee'
import Table from '../ElementsTable'
import Head from '../ElementsHead'

function EmployeeCard() {

    const [actives, setActives] = useState<boolean>(true)
    const [employees, setEmployees] = useState<Employee[]>([])
    const tbHead = new Map<string, number>([
        ['ID', 2],
        ['Funcionário',0],
        ['CPF',2],
        ['Loja',1],
        ['Ativo',1]
    ])

    useEffect(() => {
         axios.get(`${BASE_URL}/employees`)
             .then(response => {(setEmployees(response.data.content))})
    }),[]

    return (
        <Head title='Funcionários'>
            <div className="emplocontrol-form-control-container">
                <input type="text" className='emplocontrol-form-control' placeholder='Nome ou CPF'/>
            </div>
            <div className="emplocontrol-form-control-container">
            <label htmlFor="get-active-employee">Ativos</label>
            <input type="checkbox" id='get-active-employee'  checked={actives} onChange={()=>setActives(!actives)}/>

            </div>
            <Table tbHead={tbHead}>

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
                )})}
            </Table>
        </Head>
    )
}

export default EmployeeCard