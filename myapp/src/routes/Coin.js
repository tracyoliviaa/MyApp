// import wichtige  modules
import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// import css styles
import './Coin.css'

// kreiert Coin component
const Coin = () => {

    // Abrufen des dynamischen Routenparameters mithilfe des useParams-Hooks
    const params = useParams()

    // initalzustand für Coin festlegen
    const [coin, setCoin] = useState({})

    // URL für die API-Anfrage mit dynamischen Parametern erstellen
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    // Verwendet den useEffect-Hook, um Daten von der API abzurufen
    useEffect(() => {
        axios.get(url)  // API-Anforderung mit axios erstellen
            .then((res) => {
                setCoin(res.data)  // Status mit empfangenen Daten aktualisieren
            })
            .catch((error) => {
                console.log(error)  // Protokollieren von Fehlern in der Konsole
            })
    }, [])  // Führen den Effekt nur einmal aus, und zwar auf component mount


    // render coin data



    return (
        <div>
            <div className='coin-container'>
                <div className='content'>
                    <h1>{coin.name}</h1>
                </div>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}

                        </div>
                        <div className='coin-price'>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                        <tr>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour Low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>

                        </div>
                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Circulating Supply</h4>
                                {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
// export den Coin component
export default Coin