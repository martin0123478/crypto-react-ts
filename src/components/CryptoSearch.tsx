
import { useCryptoStore } from '../store'
import { currencies } from '../data/index'
import { useState } from 'react'
import { Pair } from '../types'
import { ErrorMessage } from './ErrorMessage'


export default function CryptoSearch() {
    const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptoCurrency: ''
    })
    const [error, setError] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        //consuktar api
        fetchData(pair)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div className="field">
                <label htmlFor="currency">Moneda</label>
                <select onChange={handleChange} name="currency" id="currency" value={pair.currency}>
                    <option value="">--Seleccione--</option>{
                        currencies.map(currency => (
                            <option key={currency.code} value={currency.code}>{currency.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="field">
                <label htmlFor="cryptoCurrency">CriptoMoneda</label>
                <select onChange={handleChange} name="cryptoCurrency" id="cryptoCurrency" >
                    <option value={pair.cryptoCurrency}>--Seleccione--</option>
                    {
                        cryptoCurrencies.map(crypto => (
                            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
                        ))
                    }
                </select>
            </div>

            <input type="submit" value='Cotizar' />
        </form>
    )
}
