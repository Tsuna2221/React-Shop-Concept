import React from 'react';

import SideSubs from './SidebarComps/SideSubs'
import SideManufact from './SidebarComps/SideManufact'

const Sidebar = ({match: { params: { subcategory }}, category}) => (
    <div className='cat-sidebar pad-t-20'>
        <div className="pos-sticky">
            <SideSubs category={category} param={subcategory}/>
            <SideManufact category={category}/>
        </div>
    </div>
)

export default Sidebar;