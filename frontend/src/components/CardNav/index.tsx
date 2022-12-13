import { useState } from 'react'
import { HiOutlineBuildingStorefront, BsPerson, TbLicense, RiExchangeLine, FaRegHandshake } from 'react-icons/all'

import './styles.css'

const i = [<HiOutlineBuildingStorefront/>,'Lojas']
const icons = new Map<string, [any,any,any]>()
    
icons.set('store', [<HiOutlineBuildingStorefront/>,'Lojas','#'])
icons.set('employee', [<BsPerson/>, 'Funcionários','#'])
icons.set('license', [<TbLicense/>, 'Licenças','#'])
icons.set('exchange', [<RiExchangeLine/>, 'Trocas','#'])
icons.set('request', [<FaRegHandshake/>, 'Pedidos','#'])



function CardNav() {

    const [classActive, setClassActive] = useState('store');        
    return(
        <div className="navigation">
        <ul>
            {Array.from(icons).map(([key,val]) => {
                return(
                <li className={classActive == key? 'list active': 'list'} id={key} key = {key}>
                    <a href={val[2]} >
                        <span className="icon" onClick={() => setClassActive(key)}>
                            {val[0]}
                        </span>
                        <span className="text">{val[1]}</span>
                    </a>
                </li>
                )
            })}
            <div className="indicator"></div>
        </ul>
    </div>
    )
}
export default CardNav