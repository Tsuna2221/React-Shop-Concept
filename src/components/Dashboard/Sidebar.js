import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className='d-sidebar bg-white body-height pos-fixed'>
                {this.drawSideSection(this.props.sections[0])}
                {this.drawSideSection(this.props.sections[1])}
                {this.drawSideSection(this.props.sections[2])}
                {this.drawSideSection(this.props.sections[3])}
            </div>
        );
    }

    state = {

    }

    drawSideSection = (obj) => {
        var market = obj
        var { label } = market

        var drawItems = () => {
            return market.items.map(item => {
                var { color, name, icon } = item
                var secName = this.props.currentSection.name
                
                return (
                    <a key={name} href={"/admin/" + name.toLowerCase()} className="sidebar sidebar-item d-flex a-ver" style={{backgroundColor: secName === name ? color + 14 : null}}>
                        <div className="sidebar-item__highlight" style={{backgroundColor: secName === name ? color : null}}></div>
                        <div className="sidebar-item__name d-flex a-ver mar-l-20">
                            <span className={`mdi mdi-${icon} s-20 c-light2 mar-r-12`} style={{color: secName === name ? color : null}}></span>
                            <p className="c-light2 s-14" style={{color: secName === name ? color : null, fontWeight: secName === name ? 600 : null}}>{name}</p>
                        </div>
                    </a>
                )
            })
        }
    
        return (
            <div className="sidebar-section">
                <p className="w-regular s-12 c-light2 pad-8">{label}</p>
                {drawItems()}
            </div>
        )
    }
    
    drawSingleSection = () => {}
}

export default Sidebar;