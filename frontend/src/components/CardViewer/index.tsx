import LicenseCard from '../elements/LicenseCard'
import CardNav from './../CardNav'

import './styles.css'

function CardViewer() {
    return(
        <div className="cardviewer">
            <LicenseCard/>
            <div className='cardnav'> 
                <CardNav />
            </div>
        </div>
    )
}

export default CardViewer