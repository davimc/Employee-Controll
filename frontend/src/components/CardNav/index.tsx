import { Listen } from 'ionicons/dist/types/stencil-public-runtime'
import { HiOutlineBuildingStorefront, BsPerson, TbLicense, RiExchangeLine, FaRegHandshake } from 'react-icons/all'
import './styles.css'

const list = document.querySelectorAll('.active')
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    
    this.classList.add('active')
}
list.forEach((item) => 
    item.addEventListener('click', activeLink))
function CardNav() {
    
        
    return(
        <div className="navigation">
        <ul >
            <li className="list " id='store'>
                <a href="#">
                    <span className="icon">
                        <HiOutlineBuildingStorefront onClick={() =>activeLink()}/>
                    </span>
                    <span className="text">Stores</span>
                </a>
            </li>
            <li className="list" id='employee'>
                <a href="#">
                    <span className="icon">
                        <BsPerson/>
                    </span>
                    <span className="text">Employees</span>
                </a>
            </li>
            <li className="list active">
                <a href="#">
                    <span className="icon">
                        <TbLicense />
                    </span>
                    <span className="text">Licenses</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <span className="icon">
                        <RiExchangeLine />
                    </span>
                    <span className="text">Trocas</span>
                </a>
            </li>
            <li className="list">
                <a href="#">
                    <span className="icon">
                        <FaRegHandshake />
                    </span>
                    <span className="text">Pedidos</span>
                </a>
            </li>
            <div className="indicator"></div>
        </ul>
    </div>
    )
}
export default CardNav