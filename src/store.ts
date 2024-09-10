import { create } from 'zustand'
import axios from 'axios'
import { cryotoCurrenciesReponseSchema } from './schema/crypto-schema'
async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = cryotoCurrenciesReponseSchema.safeParse(Data)
    console.log(result)
}
export const useCryptoStore = create(() => ({
    fetchCryptos: () => {
        getCryptos()
    }
}))