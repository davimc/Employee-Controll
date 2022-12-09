import './styles.css'
import icon from '../../assets/img/view-icon.svg'
type Props = {
  saleId: number;
}
function ViewButton() {
  
    return (
      <div className='dsmeta-red-btn'>
        <img src={icon} alt="Notificar"/>
      </div>
    )
  }
  
  export default ViewButton