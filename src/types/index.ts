import { CurrencySchema, cryotoCurrencyeponseSchema, PairSchema, CryptoPriceSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof cryotoCurrencyeponseSchema>
export type Pair = z.infer<typeof PairSchema>

export type CryproPrice = z.infer<typeof CryptoPriceSchema>