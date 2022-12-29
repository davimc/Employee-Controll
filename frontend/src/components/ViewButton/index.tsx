import './styles.css'
import icon from '../../assets/img/view-icon.svg'
type Props = {
  saleId: number;
}
function ViewButton() {
  
    return (
      <div className='emplocontrol-red-btn'>
        <img src={icon} alt="Visualizar"/>
      </div>
    )
  }
  
  export default ViewButton