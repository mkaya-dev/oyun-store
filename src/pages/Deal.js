import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "./All.css";
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
import Buttonlar from "../Component/Buttonlar";




const Deal = () => {
    let { storeId, storeName } = useParams();
    const [firsatListe, setFirsatListe] = useState([])
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const api_link = `https://www.cheapshark.com/api/1.0/deals?storeID=${storeId}`
        setLoading(true)
        fetch(api_link)
            .then(fl => fl.json())
            .then(fl => {
                setFirsatListe(fl)
                setLoading(false)

            }).catch(e => {
                alert("Api'den veriler çekilirken bir hata oluştu");
                setLoading(false);
            })
    }, [storeId])

    return (
        <div>

            <div className="container text-center">
                <h1 style={{ color: "white" }}>{storeName} Fırsatları</h1>

                {loading ?
                    <ClimbingBoxLoader className="orta"
                        color={"white"}
                        loading={loading}
                        size={10}
                    />
                    :
                    <div className="sol">
                        {
                            firsatListe.map(fl =>
                                <div className="liste alt-cizgi ortala container text-start">
                                    <Link to={`/${storeId}/${storeName}/${fl.gameID}/GameList`} style={{ textDecoration: "none", color: "white" }}>
                                        {fl.title}

                                    </Link>
                                </div>
                            )
                        }
                        <div className="text-start">
                            <Link to={"/"}><button className="btn btn-outline-light">
                                <i class="fa-solid fa-caret-left"></i>
                            </button></Link>
                        </div>


                    </div>








                }
                <div className=" sag">
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
                    <div>

                        <br /><br />
                        <Buttonlar />

                    </div>





                </div>


            </div>
        </div>
    )

}


export default Deal;