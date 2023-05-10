

import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import style from "../style/navigation.module.css";

export default function Navigation() {
  const [menuOpen, SetMenuOpen] = useState(false);
  
  return (
  <>
    <div className={style.Navigation}>
      <div className={style.container}>
        <h1>Allan Biseray</h1>
     
          
        <nav className={style.navPc}>
        <NavLink to="/" > Profil </NavLink>
        <NavLink to="/MesProjets" >  Projets  </NavLink>
          <NavLink  to="mailto:allan.biseray.pro@outlook.fr" > Contact </NavLink>
        </nav>

         <div className={style.menuPos}>
          <button className={`${style.menu} ${menuOpen ? style.menuAnim : style.menu}`} onClick={(e) => {e.stopPropagation(); SetMenuOpen(!menuOpen)}}>

            <div class={style.line}></div>
            <div class={style.line}></div>
            <div class={style.line}></div>
          </button>
          {menuOpen && (
            <nav className={style.navHamburger} >
                <NavLink to="/" onClick={() => SetMenuOpen(!menuOpen)} >  Profil </NavLink>
                <div className={style.lineNav}> </div>
                <NavLink to="/MesProjets" onClick={() => SetMenuOpen(!menuOpen)}>  Projets  </NavLink>
                <div className={style.lineNav}> </div>
                <NavLink to="mailto:allan.biseray.pro@outlook.fr" onClick={() => SetMenuOpen(!menuOpen)}> Contact </NavLink>
                <div className={style.lineNav}> </div>
            </nav>
          )
          }
        </div>
        
        
      
      </div>
</div>
    </>
  )
}
