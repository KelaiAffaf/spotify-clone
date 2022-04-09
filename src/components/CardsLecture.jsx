import React from 'react'
import './CardsLecture.css'
import logoLecture from '../assets/images/triangle_lecture.svg'

export default function CardsLecture() {

  return (
    <div>
        
      <div className='cardStructure'>
       
        <div className='imageAlbum'>
            <img alt="" src="https://m.media-amazon.com/images/I/517MmflqD9L._SY355_.jpg" />
        </div>
        <div>
            <button className='button'>
                <div className='logoLecture'>
                    <img alt='' src={logoLecture}/>
                </div>
            </button>
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
