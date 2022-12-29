import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import EmployeeCard from '../elements/EmployeeCard'
import ExchangeCard from '../elements/ExchangeCard'

import LicenseCard from '../elements/LicenseCard'
import StoreCard from '../elements/StoreCard'
import CardNav from './../CardNav'

import './styles.css'
import RequestCard from '../elements/RequestCard'

function CardViewer() {
    return(
        <div className="cardviewer">
            <Router>
                <Routes>
                    <Route path='/' element={<StoreCard/>}/>

                    <Route path='/stores' element={<StoreCard/>}/>

                    <Route path='/employees' element={<EmployeeCard/>}/>
                    <Route path='/licenses' element={<LicenseCard/>}/>
                    <Route path='/exchanges' element={<ExchangeCard/>}/>
                    <Route path='/requests' element={<RequestCard/>}/>
                </Routes>
                    <div className='cardnav'>
                        <CardNav />
                    </div>
                
            </Router>
            
        </div>
    )
}

export default CardViewer