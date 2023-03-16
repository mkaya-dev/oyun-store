import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./All.css"


const GameList = () => {

    let { storeId, storeName, gameId } = useParams();
    const [game, setGame] = useState(null)

    useEffect(() => {
        const api_link = `https://www.cheapshark.com/api/1.0/games?id=${gameId}`
        fetch(api_link)
            .then(g => g.json())
            .then(g => {
                setGame(g)
            })
    }, [gameId])

    if (game === null)
        return (
            <div>
                <ClimbingBoxLoader className="orta">

                </ClimbingBoxLoader>
            </div>
        )

    return (
        <div className="container text-center">
            <h5>{game.info.title}</h5>
            <img src={game.info.thumb} /><br /><br />
            <h4>En ucuz Fiyat:${game.cheapestPriceEver.price}</h4>
            <Link to={`/${storeId}/${storeName}/Deal`}><button className="btn btn-outline-dark">Geri</button></Link>
            <h4>Bugune Kadarki En Büyük Fırsatlar</h4>
            {
                game.deals.map(d =>
                    <div>
                        Satış Fiyatı: {d.price} <br />
                        İndirimsiz Fiyatı:{d.retailPrice}
                        <p> İndirim Oranı:%
                            {d.savings}
                        </p>
                    </div>
                )
            }
        </div>
    )
}

export default GameList;