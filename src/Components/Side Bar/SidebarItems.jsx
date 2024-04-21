import React from 'react'
import CreatePost from './CreatePost'
import Home from './Home'
import Notifications from './Notifications'
import ProfiileLink from './ProfiileLink'
import Search from './Search'

const SidebarItems = () => {
  return (
    <>
        <Home/>
        {/* Search */}
        <Search/>
        <Notifications/>
        <CreatePost/>
        <ProfiileLink/>
    </>
  )
}

export default SidebarItems
