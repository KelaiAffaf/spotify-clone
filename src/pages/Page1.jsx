import React from 'react'
import Sidebar from '../components/shared-components/SideBar/Sidebar'
import Navbar from '../components/shared-components/NavBar/navbar'
import StickyFooter from '../components/shared-components/Footer/stickyFooter'
import CardsLecture from '../components/CardsLecture'
import SpotifyApi from '../config/spotify'

function Page1() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
       

         <div style={{marginLeft: '235px'}}>
          <CardsLecture/>
           <SpotifyApi/>
        </div> 
        <StickyFooter/>
    </div>
  )
}

export default Page1