
import { useEffect } from 'react'
import CryptoSearch from './components/CryptoSearch'
import './index.css'
import { useCryptoStore } from './store'
function App() {
  const fetchCryptos = useCryptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  })
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
