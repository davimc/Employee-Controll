import axios from 'axios'
import { useEffect, useState } from "react";
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";
import { Store } from '../../../models/Store';
import Select from 'react-select'
import Head from '../ElementsHead'
import Table from '../ElementsTable'

import './styles.css'

function StoreCard() {

    const [stores, setStores] = useState<Store[]>([])
    const [type, setType] = useState(0)
    const [name, setName] = useState('');
    const options = [
        {value: 0, label: 'Todos'},
        {value: 1, label: 'Subway'},
        {value: 2, label: 'Cafeteria'},
        {value: 3, label: 'Restaurante'}
    ]
    const tbHead = new Map<string, number>([
        ['ID', 2],
        ['Loja',0],
        ['Tipo',2],
        ['Qtd Funcionários',1],
        ['Qtd Original',1]
    ])

    useEffect(() => {
        axios.get(`${BASE_URL}/stores?name=${name}&type=${type}`)
        .then(response => {(setStores(response.data))})
        
    }, [name, type])

    return (
        <Head title='Lojas'>
        <div>
            <div className="emplocontrol-form-control-container">
                <input type="text" value={name} className='emplocontrol-form-control' placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="emplocontrol-form-control-container">
                {/* TODO consertar o css desse Select */}
                    <Select 
                        options={options} 
                        defaultValue={options[0]}
                        className='emplocontrol-form-control' 
                        onChange={(e) => setType(e!.value)}
                    />
                
            </div>

        </div>

        <Table tbHead={tbHead}>
            {stores.map(store => {
                return(
                    <tr key={store.id}>
                        <td className="show992">{store.id}</td>
                        <td>{store.name}</td>
                        <td className="show576">{store.type}</td>
                        <td className="show992">{store.qttCurrent}</td>
                        <td className="show576">{store.qttBeloging}</td>
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

export default StoreCard