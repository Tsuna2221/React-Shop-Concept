import React from 'react';

var SearchBarProducts = (props) => {
    return (
        <div className="search-bar d-flex mar-v-20">
            <input className="si-widthfit mar-r-10" type="text" placeholder="Search Product"/>
            <input className="si-widthmedium mar-r-10" type="text" placeholder="Filter"/>
            <input className="si-widthmedium mar-r-10" type="text" placeholder="Company"/>
            <div className="sb-button" style={{backgroundColor: props.color}}><span className="mdi mdi-arrow-right s-22 c-white"></span></div>
        </div>
    );
}

export default SearchBarProducts;