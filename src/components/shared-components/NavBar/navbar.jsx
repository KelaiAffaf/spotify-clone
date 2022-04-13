import React from 'react'
import './styleNav.css'
import arrowRight from "../../../assets/images/arrowright.svg"
import arrowLeft from "../../../assets/images/arrowleft.svg"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bigdiv'>
                <div className='div1'>
                    <div><img src={arrowRight}  /></div>
                    <div><img src={arrowLeft}  /></div>
                    
                
                </div>
                <div className='div2'>
                    <Link to='/sign-up'> <button className='button1'> S`incrire </button> </Link>
                    <Link to={'/log-in'}> <button className='button2'> Se connecter </button> </Link>
                </div>
        </div>
    )
} 

export default Navbar