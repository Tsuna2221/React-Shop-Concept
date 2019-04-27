import React, { Component } from 'react';
import UserHead from '../HeaderComponents/UserHead'
import SearchHead from '../HeaderComponents/SearchHead'
import CategoriesHead from '../HeaderComponents/CategoriesHead'

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <UserHead/>
                <SearchHead categories={this.state.categories}/>
                <CategoriesHead categories={this.props.categories}/>
            </div>
        );
    }

    state = {
        categories: [
            {val: 'Health & Beauty'},
            {val: 'Phones & Tablets'},
            {val: 'Fashion'},
            {val: 'Games'},
            {val: 'Toys & Baby'},
            {val: 'Computer & Office'},
            {val: 'Home & Garden'},
            {val: 'Under $10'},
        ]
    }
}

export default Header;