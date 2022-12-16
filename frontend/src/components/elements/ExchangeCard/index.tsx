import axios from 'axios'
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { Exchange } from "../../../models/Exchange";

import './styles.css'

function ExchangeCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [search, setSearch] = useState('')
    const [state, setState] = useState('pendete');
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 

    const [exchanges, setExchanges] = useState<Exchange[]>([])

    // useEffect(() => {
    //     const dMin = minDate.toISOString().slice(0,10)
    //     const dMax = maxDate.toISOString().slice(0,10)
    //     axios.get(`${BASE_URL}/exchanges?dtMin=${dMin}&dtMax=${dMax}`)
    //         .then(response => {(setExchanges(response.data.content))})
    // }), [minDate, maxDate]

    return (
        <div className="emplocontrol-card">
        <h2 className="emplocontrol-licenses-title">Trocas</h2>
        <div className='row-container'>
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
            <div className='col-container'>
                <div className="emplocontrol-form-control-container">
                    <input type="search" className='emplocontrol-form-control' 
                        value={search} placeholder='Funcionário ou Loja'
                        onChange={() => setSearch}
                    />
                </div>
                <div className="emplocontrol-form-control-container">
                    <select id='state' value={state} onChange={() => setState} className="emplocontrol-form-control">
                        <option value='todos'>Todos</option>
                        <option value="ativo">Ativo</option>
                        <option value='pendente'>Pendente</option>
                        <option value='finalizado'>Finalizado</option>
                        <option value='cancelado'>Canelado</option>
                    </select>
                    </div>
                    
                </div>
                
            </div>
        <div>
        <table className="emplocontrol-licenses-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th>Funcionário</th>
                <th className="show576">Data Início</th>
                <th className="show992">Data Fim</th>
                <th className="show576">Ativo</th>
                <th>Visualizar</th>
            </tr>
            </thead>
            <tbody>
                {exchanges.map(exchange => {
                    return(
                        <tr key={exchange.id}>
                            <td className="show992">{exchange.id}</td>
                            <td>{exchange.employeeName}</td>
                            <td className="show576">{new Date(exchange.dtStart).toLocaleDateString()}</td>
                            <td className="show992">{new Date(exchange.dtEnd == null? 
                                exchange.dtExpected : 
                                exchange.dtEnd).toLocaleDateString()}</td>
                            <td className="show576">{exchange.dtEnd == null ? "Ativo":"Concluído"}</td>
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

export default ExchangeCard