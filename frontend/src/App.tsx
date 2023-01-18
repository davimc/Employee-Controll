import Header from './components/Header'
import './App.css'
import CardViewer from './components/CardViewer'
import EmployeeForm from './components/inserts/EmployeeForm'
import { EmployeeNew } from './models/Employee'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className=' emplocontrol-container'>
        {/* <CardViewer/> */}
        <EmployeeForm/>
      </div>
    </div>
  )
}

export default App
