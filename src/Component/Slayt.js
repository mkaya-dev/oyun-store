import ImageSlider from "./ImageSlider"
import resim2 from "../Resimler/slayt5.png";
import resim3 from "../Resimler/slayt2.jpg";
import resim5 from "../Resimler/slayt6.jpg";
import resim6 from "../Resimler/slayt7.jpg";
import resim9 from "../Resimler/resim2.jpg"
import resim10 from "../Resimler/resim3.jpg"
import resim11 from "../Resimler/resim4.jpg"
import resim12 from "../Resimler/resim5.jpg"
import "../pages/All.css"








const Slayt =() =>{


    const slides =[
        {url:resim6},
        {url:resim3},
        {url:resim2},
        {url:resim11},
        {url:resim5},
        {url:resim9},
        {url:resim10},
        {url:resim12},



       

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