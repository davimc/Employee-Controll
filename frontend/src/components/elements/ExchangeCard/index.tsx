import axios from 'axios'
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { Exchange } from "../../../models/Exchange";
import Head from '../ElementsHead'
import Table from '../ElementsTable'

import '../elementsGlobalStyles.css'

function ExchangeCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [search, setSearch] = useState('')
    const [state, setState] = useState('pendete');
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 

    const [exchanges, setExchanges] = useState<Exchange[]>([])
    
    const tbHead = new Map<string, number> ([
        ['ID',0],
        ['Gerador', 1],
        ['Trocado', 2],
        ['Período', 1],
        ['Loja',2],
        ['Estado',1]
    ])

    useEffect(() => {
        const dMin = minDate.toISOString().slice(0,10)
        const dMax = maxDate.toISOString().slice(0,10)
        axios.get(`${BASE_URL}/exchanges?dtMin=${dMin}&dtMax=${dMax}&`)
            .then(response => {(setExchanges(response.data.content))})
    }), [minDate, maxDate]

    return (
        <>
        <Head title='Trocas'>
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
                        <option value='0' selected>Todos</option>
                        <option value='1'>Pendente</option>
                        <option value="2">Ativo</option>
                        <option value='3'>Concluído</option>
                        <option value='4'>Canelado</option>
                    </select>
                    </div>
                    
                </div>
                
            </div>
        <Table tbHead={tbHead}>
                {exchanges.map(exchange => {
                    return(
                        <tr key={exchange.id}>
                            <td>{exchange.id}</td>
                            <td className="show576">{exchange.generator.name}</td>
                            <td className="show992">{exchange.exchanged.name}</td>
                            <td className="show576">
                                <div className="element_div">
                                    <span>{new Date(exchange.dtStart).toLocaleDateString()}</span>
                                    <span>{new Date(exchange.dtEnd == null? 
                                        exchange.dtExpected : 
                                        exchange.dtEnd).toLocaleDateString()}
                                    </span>
                                </div>
                                </td>
                            <td className="show992">{exchange.generator.store}</td>
                            <td className="show576">{exchange.dtEnd == null ? "Ativo":"Concluído"}</td>
1                            <td>
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

export default ExchangeCard