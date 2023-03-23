import React from "react";
import "../pages/All.css";
import resim1 from "../Resimler/kutu1.jpg"
import resim2 from "../Resimler/kutu2.jpg"
import resim3 from "../Resimler/kutu3.jpg"
import resim4 from "../Resimler/kutu4.jpg"
import resim5 from "../Resimler/kutu5.jpg"



const Kutu = () =>{
    return(
        <div className="containerr">
        <div className="box">
            <img src={resim1} width="245px" height="500px" />
        </div>
        <div className="box">
        <img src={resim2} width="245px" height="500px" />

        </div>
        <div className="box">
        <img src={resim3} width="245px" height="500px" />

        </div>
        <div className="box">
            <img src={resim4} width="245px" height="500px" />
        </div>
        <div className="box">
        <img src={resim5} width="245px" height="500px" />

        </div>
        </div>
    )
}

export default Kutu;