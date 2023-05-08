import { useState } from 'react'
import { HiOutlineBuildingStorefront, BsPerson, TbLicense, RiExchangeLine, FaRegHandshake } from 'react-icons/all'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/request'

import './styles.css'

const i = [<HiOutlineBuildingStorefront/>,'Lojas']
const icons = new Map<string, [any,any,any]>()
    
icons.set('store', [<HiOutlineBuildingStorefront/>,'Lojas','stores'])
icons.set('employee', [<BsPerson/>, 'Funcionários','employees'])
icons.set('license', [<TbLicense/>, 'Licenças','licenses'])
icons.set('exchange', [<RiExchangeLine/>, 'Trocas','exchanges'])
icons.set('request', [<FaRegHandshake/>, 'Pedidos','requests'])



function CardNav() {

    const [classActive, setClassActive] = useState('store');        
    return(
        <div className="navigation">
        <ul>
            {Array.from(icons).map(([key,val]) => {
                return(
                <li className={classActive == key? 'list active': 'list'} id={key} key = {key} onClick={() => {
                    {console.log(BASE_URL)}
                    setClassActive(key)}
                    }>
                    <Link to={val[2]} >
                        <span className="icon" >
                            {val[0]}
                        </span>
                        <span className="text">{val[1]}</span>
                    </Link>
                </li>
                )
            })}
            <div className="indicator"></div>
        </ul>
    </div>
    )
}
export default CardNav