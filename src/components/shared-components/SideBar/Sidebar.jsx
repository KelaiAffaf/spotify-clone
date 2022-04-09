import React from 'react'
import './Sidebar.css'
import Logo from '../../../assets/images/Spotify-Logo.svg'


function Sidebar() {
    return (
        <div className='SideBarContainer'>
            <div className='SideBar'>
                <div className='SideBar-Icon'>
                    <img src={Logo} alt=""  id='logo'/>
                </div>
                <div className='SideBar-Item'>
                    {/* <div className="Items">
                        
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Sidebar
