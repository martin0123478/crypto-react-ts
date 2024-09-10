
import CryptoSearch from './components/CryptoSearch'
import './index.css'

function App() {


  return (
    <>
      <div className="container">
        <h1 className='app-title'>Cotizador de <span>Criptomonedas</span></h1>
        <div className="content">
          <CryptoSearch />
        </div>
      </div>

    </>
  )
}

export default App
