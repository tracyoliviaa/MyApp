import React from 'react'

import './Coins.css'

//*  importiert die React-Bibliothek in das aktuelle Modul. 
// * In der Funktion CoinItem wird das übergebene Objekt "props" verwendet, um auf die Daten für eine einzelne Kryptowährung zuzugreifen


const CoinItem = (props) => {
    return (
        <div className='coin-rank'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        </div>
    )
}

export default CoinItem