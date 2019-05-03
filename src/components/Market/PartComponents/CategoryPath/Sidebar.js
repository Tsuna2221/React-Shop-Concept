import React, { Component } from 'react';

import SideSubs from './SidebarComps/SideSubs'
import SideManufact from './SidebarComps/SideManufact'

class Sidebar extends Component {
    render() {
        return (
            <div className='cat-sidebar pad-t-20'>
                <SideSubs category={this.props.category.data} param={this.props.match.params.subcategory} typeList={this.props.products.list_types}/>
                <SideManufact category={this.props.category.data} companies={this.props.products.list_companies}/>
            </div>
        );
    }

    state = {
        
    }

    drawRating = () => {

    }

    drawPrice = () => {

    }
}

export default Sidebar;