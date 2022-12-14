import Header from './components/Header'
import './App.css'
import CardViewer from './components/CardViewer'

function App() {

  return (
    <div className="App">
      <Header/>
      <div className=' emplocontrol-container'>
        <CardViewer/>
      </div>
    </div>
  )
}

export default App
