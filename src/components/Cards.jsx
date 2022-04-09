import React from 'react'
import './Cards.css'

export default function Cards() {
  return (
    <div>
      <div className='cardStructure'>
        <div className='imageAlbum'>
            <img alt="" src="https://m.media-amazon.com/images/I/517MmflqD9L._SY355_.jpg" />
        </div>
        <div className='textStyle'>
                <div className='title'>
                    <h3>Thriller</h3>
                </div>
                <div className='auteur'>
                    <h4>Michael Jackson</h4>
            </div>
        </div>
      </div>
    </div>
  )
}
