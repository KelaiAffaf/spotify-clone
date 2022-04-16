import React from 'react'
import './Sidebar.css'
import Logo from '../../../assets/images/Spotify-Logo.svg'
import Item from './Sidebar-Component/Item'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faMagnifyingGlass,faPlus, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons'
import { AiFillHome } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import { IoAlbums } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { AiFillPlusCircle } from 'react-icons/ai'


function SideBar() {
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
                    icon={<AiFillHome style={{
                        fontSize: '1.3rem',
                    }}/>}
                    />
                    <Item
                    title="Rechercher"
                    icon={<FiSearch style={{
                        fontSize: '1.3rem',
                    }} />}                    />
                    <Item
                    title="Bibiothéque"
                    icon={<IoAlbums style={{
                        fontSize: '1.3rem',
                    }} />}         /> 
                  
                  
               </div>
               <div className="Down">
                    <Item
                    title="Créer une Playlist"

                    icon={<AiFillPlusCircle style={{
                        fontSize: '1.3rem',
                    }} />}                    />
                    <Item
                    title="Titres likés"
                    icon={<FcLike style={{
                        fontSize: '1.3rem',
                    }} />}                />
               </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar
