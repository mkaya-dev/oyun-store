import ImageSlider from "./ImageSlider"
import resim2 from "../Resimler/slayt5.png";
import resim3 from "../Resimler/slayt2.jpg";
import resim4 from "../Resimler/slayt3.jpg";
import resim5 from "../Resimler/slayt6.jpg";
import resim6 from "../Resimler/slayt7.jpg";
import "../pages/All.css"








const Slayt =() =>{


    const slides =[
        {url:resim3},
        {url:resim6},
        {url:resim2},
        {url:resim4},
        {url:resim5},

       

    ];
    const containerStyles ={
        padding:"40px",
        width:"1400px",
        height:"600px",

    };
    return(
        <div>
            <div  style={containerStyles}>
            <ImageSlider  slides={slides} />
            </div>
        </div>
    )
}

export default Slayt;