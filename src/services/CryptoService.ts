import axios from 'axios'
import { CryptoPriceSchema, cryotoCurrenciesReponseSchema } from '../schema/crypto-schema'
import { Pair } from '../types'

export async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryotoCurrenciesReponseSchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export async function fetchCurrencyCryptoPrice(pair: Pair) {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptoCurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)

    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptoCurrency][pair.currency])
    if (result.success) {
        console.log(result.data)
    }
}