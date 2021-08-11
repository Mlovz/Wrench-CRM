import React, { useState } from 'react'
import SidebarList from './sidebarList/SidebarList'

const Sidebar = () => {
    const [open, setOpen] = useState(false)
    
    return (
        <div className={`sidebar ${open && 'sidebar--active'}`}>
            <div className="sidebar__wrap">
                <div className="sidebar__title">
                    <h3>Меню</h3>
                    <div onClick={() => setOpen(!open)} className='burg'>
                        <div></div>
                    </div>
                </div>
                <SidebarList/>
            </div>
        </div>
    )
}

export default Sidebar
