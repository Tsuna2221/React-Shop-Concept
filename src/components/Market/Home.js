import React, { Component, Fragment } from 'react';

import Banner from './PartComponents/Banner'
import ProductsSection from './PartComponents/ProductsSection'
import CategoriesSection from './PartComponents/CategoriesSection'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner images={this.props.banners}/>
				<div className="main-body">
					<ProductsSection products={this.props.products} type="trending"/>
					<CategoriesSection categories={this.props.categories}/>
				</div>
            </Fragment>
        );
    }

    state = {

    }
}

export default Home;