import React from "react";
import style from "../../style/home.module.css"

export default function Home() {
    return (
        <div className={style.home}> 
            <div className={style.titlePro}> Développeur Web </div>
            <div className={style.txtPrentation}>
                <div className={style.bonjour}> Bonjour, </div>
                <div  className={style.Prentation}>
                            
                    <div className={style.TextPres}>
                        Je suis un développeur web passionné par le développement front-end.
                        J'ai suivi une formation de développeur web chez OpenClassrooms où j'ai acquis des compétences solides en HTML
                        , CSS, React.js et JavaScript. 

                    </div>
                    <div className={style.TextPres}>
                        J'ai une attitude positive et j'apprécie le travail en équipe,
                        tout en étant rigoureux sur le respect des délais.
                         
                    </div>
                    <div className={style.TextPres}>
                         Mon objectif de carrière est de devenir un développeur web front-end accompli
                        et de contribuer à la création de sites web innovants qui répondent aux besoins des utilisateurs.
                    </div>
               
              </div> 
            </div>
           
        
            
        </div>
        
    )
};