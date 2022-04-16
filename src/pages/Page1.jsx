import React from 'react'
import StickyFooter from '../components/shared-components/Footer/stickyFooter'

import SideBar from '../components/shared-components/SideBar/Sidebar'
import NavBar from '../components/shared-components/NavBar/NavBar'

function Page1() {
  return (
    <div>
        <StickyFooter/>
        <NavBar />
        <SideBar/>
    </div>
  )
}

export default Page1