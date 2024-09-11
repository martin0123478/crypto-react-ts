import { z } from 'zod'
export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const cryotoCurrencyeponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const cryotoCurrenciesReponseSchema = z.array(cryotoCurrencyeponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    cryptoCurrency: z.string()
})

export const CryptoPriceSchema = z.object({
    IMAGEURL: z.string(),
    PRICE: z.string(),
    HIGHDAY: z.string(),
    LOWDAY: z.string(),
    HIGH24HOUR: z.string(),
    LASTUPDATE: z.string()

})

