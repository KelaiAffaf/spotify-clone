import React from 'react'
import style from './style.css'
import arrowRight from "../../../assets/images/arrowright.svg"
import arrowLeft from "../../../assets/images/arrowleft.svg"
function Navbar() {
    return (
        <div className='bigdiv'>
                <div className='div1'>
                    <div><img src={arrowRight}  /></div>
                    <div><img src={arrowLeft}  /></div>
                    
                
                </div>
                <div className='div2'>
                    <button className='button1'>S`incrire</button>
                    <button className='button2'>Se connecter</button>
                </div>
        </div>
    )
}

export default Navbar