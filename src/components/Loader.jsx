import React from 'react'
import style from "../style/loader.module.css"
function Loader() {
  return (
    <div className={style.containerLoaderPage}>
          <div className={style.containerLoader}>
              <div className={style.letter}>
                    <div className={`${style.loaderBar} ${style.letterA}`}> A </div> 
                    <div className={`${style.loaderBar} ${style.letterB}`}> B </div> 
              </div>
      </div>
    </div>
  )
}

export default Loader;
