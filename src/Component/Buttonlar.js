import React from "react";
import "../pages/All.css"
const Buttonlar = () => {
    return (
        <div>
            <div class="Wrapper">
                <div class="button">
                    <div class="icon"><i class="fab fa-facebook-f"></i></div>
                    <span>Facebook</span>
                </div>
                <div class="button">
                    <div class="icon"><i class="fa-brands fa-twitter"></i></div>
                    <span>Twitter</span>
                </div>
                <div class="button">
                    <div class="icon"><i class="fa-brands fa-instagram"></i></div>
                    <span>İnstagram</span>
                </div>
                <div class="button">
                    <div class="icon"><i class="fa-brands fa-github"></i></div>
                    <span>Github</span>
                </div>
                <div class="button">
                    <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                    <span>Youtube</span>
                </div>


            </div>
        </div>
    )
}

export default Buttonlar;