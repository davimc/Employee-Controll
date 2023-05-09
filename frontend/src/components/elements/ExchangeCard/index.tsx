import axios from 'axios'
import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { Exchange } from "../../../models/Exchange";
import Head from '../ElementsHead'
import Table from '../ElementsTable'

import '../elementsGlobalStyles.css'
import Select from 'react-select';

function ExchangeCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [search, setSearch] = useState('')
    const [state, setState] = useState(0);
    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max) 
    const options = [
        {value:0, label: 'Todos'},
        { value:1, label:'Pendente'},
        { value:2, label:'Ativo'},
        { value:3, label:'Concluído'},
        { value:4, label:'Canelado'}
    ]
    const [exchanges, setExchanges] = useState<Exchange[]>([])
    
    const tbHead = new Map<string, number> ([
        ['ID',2],
        ['Gerador', 0],
        ['Trocado', 2],
        ['Período', 1],
        ['Estado',0]
    ])
    const dMin = minDate.toISOString().slice(0,10)
    const dMax = maxDate.toISOString().slice(0,10)
    const memo = useMemo(() => {
       
        axios.get(`${BASE_URL}/exchanges?dtMin=${dMin}&dtMax=${dMax}&`)
            .then(response => {(setExchanges(response.data.content))})
    }, [search])

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
                    <Select id='state' 
                    options={options}
                    defaultValue={options[0]} 
                    onChange={(e) => setState(e!.value)} 
                    className="emplocontrol-form-control"
                    />
                        
                    </div>
                    
                </div>
                
            </div>
        <Table tbHead={tbHead}>
                {exchanges.map(exchange => {
                    return(
                        <tr key={exchange.id}>
                            <td className="show992">{exchange.id}</td>
                            <td className="show992">{exchange.employeeGenerator}</td>
                            <td className="show992">{exchange.employeeExchanged != null? exchange.employeeExchanged:'-'}</td>

                            <td className="show576">
                                <div className="element_div">
                                    <span>{new Date(exchange.dtStart).toLocaleDateString()}</span>
                                    <span>{new Date(exchange.dtEnd == null? 
                                        exchange.dtExpected : 
                                        exchange.dtEnd).toLocaleDateString()}
                                    </span>
                                </div>
                                </td>
                            <td className="show576">{exchange.dtEnd == null ? "Ativo":"Concluído"}</td>
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

export default ExchangeCard