import React from 'react'
import './Item.css'

function Item({title , icon}) {
  return (
    <div className='ItemContainer'>
        <div className='Item-icon'>
            <img src={icon} alt=""  id='logo'/>
            </div>
        <div className='Item-title'>
            {title}
            </div>



    </div>
  )
}

export default Item