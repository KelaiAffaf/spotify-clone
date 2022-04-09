import React from 'react'
import './footerStyle.css'

export default function StickyFooter() {
  return (
    <a href='/'>
        <footer className='stickyFooter'>
            <div className='discription'>
                <p> PREVIEW OF SPOTIFY </p>
                <p> Sign up to unlimited songs and podacts with occasional ads. No credit card needed.</p>
            </div>
            <div>
                <button> Sign up free </button>
            </div>
        </footer>
    </a>
  )
}
