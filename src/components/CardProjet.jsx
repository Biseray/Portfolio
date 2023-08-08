import React from 'react'
import Carousel from './Carousel';
import style from "../style/cardProjet.module.css"



const LinkSite = (url) => {
    window.open(url)
}



function CardProjet({ id, title, pictures, description, outil, link }) {
    return (
        <div key={id} className={style.animateProjet}>
            <h2>{title}</h2>
            <div className={style.contenaireCard}>
                <Carousel pictures={pictures} />
                <div className={style.containerDescription}>
                    <div className={style.description}>{description}</div>
                    <div className={style.lineS}></div>
                    <div className={style.listOutils}>
                        {outil.map((outils, index) => (
                            <div key={index}>
                                <img className={style.sizeLogo} src={outils} alt="" />
                            </div>
                        ))}
                    </div>

                    <div className={style.btnPos}>
                        <button className={style.btnLink} onClick={() => LinkSite(link)}>
                            Voir le site !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardProjet;
