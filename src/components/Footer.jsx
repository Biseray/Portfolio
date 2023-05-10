import React from "react";
import { NavLink } from "react-router-dom";
import LinkedIn from "../assets/LinkedIn_logo_initials.png"
import Github from "../assets/github.png"
import style from "../style/footer.module.css"



export default function Footer() {
    return(
        <div>
            <footer >
                <nav className={style.navFooter}>
                    <NavLink className={style.link} to="mailto:allan.biseray.pro@outlook.fr" > Contact </NavLink>
                    <div className={style.logoContact}>
                    <NavLink to="https://www.linkedin.com/in/allan-biseray-a70852273/"> <img className={style.LinkedIn} src={LinkedIn} alt="profil LinkedIn" /></NavLink>
                     <NavLink to="https://github.com/Biseray/"> <img className={style.LinkedIn} src={Github} alt="profil LinkedIn" /></NavLink>
                    </div>
                </nav>
                    
            </footer>
        
        </div>
    )
}