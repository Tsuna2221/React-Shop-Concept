import React, { Fragment } from 'react';

import Banner from './PartComponents/Banner'
import ProductsSection from './PartComponents/ProductsSection'
import CategoriesSection from './PartComponents/CategoriesSection'

const Home = (props) => (
    <Fragment>
        <Banner images={props.banners}/>
        <div className="main-body">
            <ProductsSection products={props.products} type="trending"/>
            <CategoriesSection categories={props.categories}/>
        </div>
    </Fragment>
)

export default Home;