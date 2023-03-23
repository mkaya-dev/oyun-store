import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./All.css"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Slayt from "../Component/Slayt";
import Kutu from "../Component/Kutu";


const Home = () => {
    const [magzaListe, setMagzaListe] = useState([])
    const [loading, setLoading] = useState(false);


    const film_img = "https://www.cheapshark.com"

  

    useEffect(() => {
        const api_link = "https://www.cheapshark.com/api/1.0/stores"
        setLoading(true)
        fetch(api_link)
            .then(ml => ml.json())
            .then(ml => {
                setMagzaListe(ml)
                setLoading(false)

            })
    }, [])


    return (
        <div>
            <Slayt/>
            {loading ?
                <ClimbingBoxLoader className="orta"
                    color={"white"}
                    loading={loading}
                    size={10}
                />
                :
                
                <div className="col-12 row row-cols-2 row-cols-md-6 g-2">
                    
                    {
                        magzaListe.map(ml =>
                            <div className="renk">

                                <Link to={`/${ml.storeID}/${ml.storeName}/Deal`}>
                                    <img className="renk" src={film_img + ml.images.logo} width="180px" />
                                </Link>
                               

                                <div>

                                </div>
                            </div>
                            

                        )
                    }
                    <Kutu/>

                </div>

            }

        </div>
    )
}



export default Home;