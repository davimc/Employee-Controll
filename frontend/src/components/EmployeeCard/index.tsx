import DatePicker from "react-datepicker"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"

import './styles.css'
import ViewButton from "../ViewButton";

function EmployeeCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 


    return (
        <div className="dsmeta-card">
        <h2 className="dsmeta-sales-title">Funcionários</h2>
        <div>
        <div className="dsmeta-form-control-container">
        <DatePicker
            selected={minDate}
            onChange={(date: Date) => {setMinDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
/>
        </div>
        <div className="dsmeta-form-control-container">
        <DatePicker
            selected={maxDate}
            onChange={(date: Date) => {setMaxDate(date)}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
/>
        </div>
        </div>

        <div>
        <table className="dsmeta-sales-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th className="show576">Data</th>
                <th>Funcionário</th>
                <th className="show992">CPF</th>
                <th className="show992">Loja</th>
                <th>Visualizar</th>
            </tr>
            </thead>
            <tbody>
            
                <tr>
                    <td className="show992">#322</td>
                    <td className="show576">{new Date().toLocaleDateString()}</td>
                    <td>Lucijane</td>
                    <td className="show992">000.090.000-55</td>
                    <td className="show992">Adminstrativo</td>
                    <td>
                    <div className="dsmeta-red-btn-container">
                        <ViewButton />
                    </div>
                    </td>
                </tr>  
                <tr>
                    <td className="show992">#322</td>
                    <td className="show576">{new Date().toLocaleDateString()}</td>
                    <td>Lucijane</td>
                    <td className="show992">000.090.000-55</td>
                    <td className="show992">Adminstrativo</td>
                    <td>
                    <div className="dsmeta-red-btn-container">
                        <ViewButton />
                    </div>
                    </td>
                </tr>  
                <tr>
                    <td className="show992">#322</td>
                    <td className="show576">{new Date().toLocaleDateString()}</td>
                    <td>Lucijane</td>
                    <td className="show992">000.090.000-55</td>
                    <td className="show992">Adminstrativo</td>
                    <td>
                    <div className="dsmeta-red-btn-container">
                        <ViewButton />
                    </div>
                    </td>
                </tr>  
            </tbody>

        </table>
        </div>

    </div>
    )
}

export default EmployeeCard