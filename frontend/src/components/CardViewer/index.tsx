import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import EmployeeCard from '../elements/EmployeeCard'

import LicenseCard from '../elements/LicenseCard'
import CardNav from './../CardNav'

import './styles.css'

function CardViewer() {
    return(
        <div className="cardviewer">
            <Router>
                <Routes>
                    <Route path='/' element={<EmployeeCard/>}/>

                    <Route path='/employees' element={<EmployeeCard/>}/>
                    <Route path='/licenses' element={<LicenseCard/>}/>
                </Routes>
                
                    <CardNav />
                
            </Router>
            
        </div>
    )
}

export default CardViewer