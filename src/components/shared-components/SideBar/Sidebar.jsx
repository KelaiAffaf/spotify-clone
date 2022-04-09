import React from 'react'
import './Sidebar.css'
import Logo from '../../../assets/images/Spotify-Logo.svg'
import Item from './Sidebar-Component/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass,faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons'
<<<<<<< HEAD
// import {faCollection}
// 
=======
>>>>>>> 8b29a052251907fa9e2b18ce5ac6b59a7b455e98

function Sidebar() {
    return (
        <div className='SideBarContainer'>
            <div className='SideBar'>
                <div className='SideBar-Icon'>
                    <img src={Logo} alt=""  id='logo'/>
                </div>
                <div className='SideBar-Item'>
               
               <div className="up">

                    <Item
                    title="Accueil"
                    icon={ <FontAwesomeIcon icon={faHouse}   />}
                    />
                    <Item
                    title="Rechercher"
                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                    />
                    <Item
                    title="Bibiothéque"
                    icon={<FontAwesomeIcon icon={faMusic}
                    
                    />
                }          /> 
                  
                  
               </div>
               <div className="Down">
                    <Item
                    title="Créer une Playlist"

                    icon={<FontAwesomeIcon icon={faPlus}   />}
                    />
                    <Item
                    title="Titres likés"
                    icon={<FontAwesomeIcon icon={ faHeart}  />}
                />
               </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
