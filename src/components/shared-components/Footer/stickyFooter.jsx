import React from 'react'
import './footerStyle.css'
import { Link } from 'react-router-dom'

export default function StickyFooter() {
  return (
    <a href='/'>
        <footer className='stickyFooter'>
            <div className='discription'>
                <p> PREVIEW OF SPOTIFY </p>
                <p> Sign up to unlimited songs and podacts with occasional ads. No credit card needed.</p>
            </div>
            <div>
              <Link to='/sign-up'><button className='Btn-footer'>  Sign up free  </button> </Link>  
            </div>
        </footer>
    </a>
  )
}
