import React, { Component, Fragment } from 'react';

import Banner from './PartComponents/Banner'
import ProductsSection from './PartComponents/ProductsSection'
import CategoriesSection from './PartComponents/CategoriesSection'

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner/>
				<div className="main-body">
					<ProductsSection type="trending"/>
					<CategoriesSection/>
				</div>
            </Fragment>
        );
    }

    state = {

    }
}

export default Home;