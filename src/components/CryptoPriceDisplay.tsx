import { useMemo } from "react"
import { useCryptoStore } from "../store"
import { Spinner } from "./Spinner"

export const CryptoPriceDisplay = () => {
    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)
    const hasResult = useMemo(() => Object.keys(result).length > 0, [result])
    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} />
                        <div>
                            <p>El precio es de : <span>{result.PRICE}</span></p>
                            <p>Precio más alto del día : <span>{result.HIGHDAY}</span></p>
                            <p>Precio más bajo del día : <span>{result.LOWDAY}</span></p>
                            <p>Variación ultimas 24 hrs : <span>{result.HIGH24HOUR}</span></p>
                            <p>Ultima actualización: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
