import { CurrencySchema, cryotoCurrencyeponseSchema, PairSchema } from '../schema/crypto-schema'
import { z } from 'zod'

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof cryotoCurrencyeponseSchema>
export type Pair = z.infer<typeof PairSchema>