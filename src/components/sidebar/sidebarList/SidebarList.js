import React from 'react'
import SidebarItem from './SidebarItem'

const SidebarList = () => {
    return (
        <nav className="sidebar__nav">
            <ul className='sidebar__list'>
                <SidebarItem/>
            </ul>
        </nav>
    )
}

export default SidebarList
