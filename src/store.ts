import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { getCryptos, fetchCurrencyCryptoPrice } from './services/CryptoService'
import { CryproPrice, CryptoCurrency, Pair, } from './types'

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[]
    result: CryproPrice
    loading: boolean
    fetchCryptos: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptoCurrencies: [],
    result: {} as CryproPrice,
    loading: false,
    fetchCryptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrencyCryptoPrice(pair)
        console.log(result)
        set(() => ({
            result, loading: false
        }))
    }
})))