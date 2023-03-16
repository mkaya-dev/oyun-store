import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./All.css"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Slayt from "../Component/Slayt";




const Home = () => {
    const [magzaListe, setMagzaListe] = useState([])
    const [loading, setLoading] = useState(false);



    const film_img = "https://www.cheapshark.com"

    useEffect(() => {
        const api_link = "https://www.cheapshark.com/api/1.0/stores"
        setLoading(true)
        fetch(api_link)
            .then(fl => fl.json())
            .then(fl => {
                setMagzaListe(fl)
                setLoading(false)

            })
    }, [])


    return (
        <div>
            <Slayt/>
            {loading ?
                <ClimbingBoxLoader className="orta"
                    color={"black"}
                    loading={loading}
                    size={10}
                />
                :
                
                <div className="col-12 row row-cols-2 row-cols-md-6 g-2">
                    
                    {
                        magzaListe.map(fl =>
                            <div className="renk">

                                <Link to={`/${fl.storeID}/${fl.storeName}/Deal`}>
                                    <img className="renk" src={film_img + fl.images.logo} width="180px" />
                                </Link>

                                <div>

                                </div>
                            </div>

                        )
                    }

                </div>

            }

        </div>
    )
}



export default Home;