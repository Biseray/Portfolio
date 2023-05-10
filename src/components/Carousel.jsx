import React from "react";
import { useState } from "react";
import style from "../style/carousel.module.css"
import rightArrow from "../assets/right-arrow.png"
import leftArrow from "../assets/left-arrow.png"


export default function Carousel({ pictures }) {
    const [picturesIndex, setPicturesIndex] = useState(0)

//click retour 
    const handlePrevClick = () => {
        let prevIndex = picturesIndex -1;
        if (picturesIndex === 0) {
            prevIndex = pictures.length -1;

        }
        setPicturesIndex(prevIndex);
    }


//click suivant 
    const handleNextClick = () => {

        let nextIndex = picturesIndex + 1;
        if (nextIndex > pictures.length -1 ) {
            nextIndex = 0

        }; setPicturesIndex(nextIndex)
    }

  
    
    return (
        <div className={style.containerCarousel}>
            <img src={pictures[picturesIndex]} alt="" className={style.posCarousel}  />
            <div className={style.posFleche} >
                <div  className={style.flecheLeft} >
                     <img src={leftArrow} alt="" onClick={handlePrevClick}/>
                </div>
                <div className={style.flecheRight}>
                    <img src={rightArrow} alt="" onClick={handleNextClick} />
                </div>

            </div>
            
            
              
           
        </div>
    )

}

