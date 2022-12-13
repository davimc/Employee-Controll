import LicenseCard from './../LicenseCard'
import CardNav from './../CardNav'

import './styles.css'

function CardViewer() {
    return(
        <div className="cardviewer">
            <LicenseCard />
            <CardNav/>
        </div>
    )
}

export default CardViewer