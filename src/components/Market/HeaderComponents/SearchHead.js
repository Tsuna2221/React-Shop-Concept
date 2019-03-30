import React, { Component } from 'react';

class SearchHead extends Component {
    render() {
        return (
            <div className='SearchHead d-flex a-ver bg-white bs-light a-cen'>
                <div className="SearchHead__input-container d-flex a-ver">
                    <input type="text" placeholder="Search" className="search-input bs-light pad-h-10"/>
                    <select name="categories-select" className="search-select bs-light pad-h-10 c-medium">
                        <option value="#">All Categories</option>
                        {this.drawSelectCategories()}
                    </select>
                    <div className="search-button bs-light d-flex a-cen clickable"><span className="mdi mdi-arrow-right c-medium s-20"></span></div>
                    <a href="/" className="c-blue s-12 mar-l-18">Advanced Search</a>
                </div>
            </div>
        );
    }

    state = {
        
    }

    drawSelectCategories = () => this.props.categories.map(cat => <option key={cat.val} value="#">{cat.val}</option>)
}

export default SearchHead;