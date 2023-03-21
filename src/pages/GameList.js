import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import resim1 from "../Resimler/slayt1.jpg"
import resim2 from "../Resimler/slayt2.jpg"
import resim3 from "../Resimler/slayt3.jpg"
import resim4 from "../Resimler/slayt5.png"
import resim5 from "../Resimler/slayt.jpg"
import resim6 from "../Resimler/slayt6.jpg"
import resim7 from "../Resimler/slayt7.jpg"
import resim8 from "../Resimler/resim1.jpg"
import resim9 from "../Resimler/resim2.jpg"
import resim10 from "../Resimler/resim3.jpg"
import resim11 from "../Resimler/resim4.jpg"
import resim12 from "../Resimler/resim5.jpg"
import resim13 from "../Resimler/resim6.jpg"

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



            <h5 style={{ color: "white" }}>{game.info.title}</h5>
            <img src={game.info.thumb} /><br /><br />
            <h4 style={{ color: "white" }}>En ucuz Fiyat:${game.cheapestPriceEver.price}</h4>

            <h4 style={{ color: "white" }}>Bugüne Kadarki En Büyük Fırsatlar</h4>

            <div className="sol">






                {
                    game.deals.map(d =>
                        <div className="">
                            <div class="card-group">
                                <div class="card ">
                                    <div class="card-body renk">
                                        <h5 class="card-title">Satış Fiyatı: ${d.price}</h5>
                                        <p class="card-text">İndirimsiz Fiyatı: ${d.retailPrice}</p>
                                        <p class="card-text">İndirim Oranı:% {d.savings}</p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )

                }







                <div className="text-start">
                    <Link to={`/${storeId}/${storeName}/Deal`}><button className="btn btn-outline-light">
                    <i class="fa-solid fa-caret-left"></i>
                        </button></Link>
                </div>


            </div>

            <div className="sag">
                <h4 className="a">
                    <Link to={"/"}>
                        <i class="fa-solid fa-house" style={{ color: "white" }} ></i>
                    </Link>
                </h4>
                <img className="renk" src={resim1} width="300px" /><br />
                <img className="renk" src={resim2} width="300px" /><br />
                <img className="renk" src={resim3} width="300px" /><br />
                <img className="renk" src={resim4} width="300px" /><br />
                <img className="renk" src={resim5} width="300px" /><br />
                <img className="renk" src={resim6} width="300px" /><br />
                <img className="renk" src={resim7} width="300px" /><br />
                <img className="renk" src={resim8} width="300px" /><br />
                <img className="renk" src={resim9} width="300px" /><br />
                <img className="renk" src={resim10} width="300px" /><br />
                <img className="renk" src={resim11} width="300px" /><br />
                <img className="renk" src={resim12} width="300px" /><br />
                <img className="renk" src={resim13} width="300px" /><br />

            </div>
        </div>
    )
}

export default GameList;

