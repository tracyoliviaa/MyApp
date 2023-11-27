import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Header from './components/Header'



function App() {
// initalisieren des Zustands für die Coindaten
    const [coins, setCoins] = useState([])
// Definieren der Api-Url für den Datenabruf
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

    useEffect(() => {
        //senden einer Api-Apfrage an die defnierte URL und Aktualisieren der Daten
        axios.get(url).then((response) => {
            setCoins(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    /* Rendern von Header, Navigationsleiste und Footer */
     /* Definieren von Routen */

return (
    <>
        <Header />

        <Navbar />


        <Routes>
            <Route path='/' element={<Coins coins={coins} />} />
            <Route path='/coin' element={<Coin />}>
                <Route path=':coinId' element={<Coin />} />
            </Route>
        </Routes>

    </>
);
}

export default App;
