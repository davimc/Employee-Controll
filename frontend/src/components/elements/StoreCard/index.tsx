import axios from 'axios'
import { useEffect, useState } from "react";
import ViewButton from "../../ViewButton";
import { BASE_URL } from "../../../utils/request";

import './styles.css'
import { Store } from '../../../models/Store';
import Select from 'react-select'

function StoreCard() {

    const [stores, setStores] = useState<Store[]>([])
    const [type, setType] = useState(-1)
    const [name, setName] = useState('');
    const options = [
        {value: -1, label: 'Todos'},
        {value: 0, label: 'Subway'},
        {value: 1, label: 'Cafeteria'},
        {value: 2, label: 'Restaurante'}
    ]

    useEffect(() => {
        axios.get(`${BASE_URL}/stores?name=${name}&type=${type}`)
            .then(response => {(setStores(response.data))})
    }), []

    return (
        <div className="emplocontrol-card">
            
        <h2 className="emplocontrol-licenses-title">Lojas</h2>
        <div>
            <div className="emplocontrol-form-control-container">
                <input type="text" value={name} className='emplocontrol-form-control' placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="emplocontrol-form-control-container">
                    <Select 
                        options={options} 
                        defaultValue={options[0]}
                        className='emplocontrol-form-control' 
                        />
                
            </div>

        </div>

        <div>
        <table className="emplocontrol-licenses-table">
            <thead>
            <tr>
                <th className="show992">ID</th>
                <th>Loja</th>
                <th className="show576">Tipo</th>            
                <th className="show576">Qtd Atual</th>
                <th className="show992">Qtd Original</th>
                
                <th>Visualizar</th>
            </tr>
            </thead>
            <tbody>
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
                )
                })}
            </tbody>

        </table>
        </div>

    </div>
    )
}

export default StoreCard