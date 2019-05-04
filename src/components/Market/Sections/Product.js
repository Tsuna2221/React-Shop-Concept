import React, { Component } from 'react';

import Navigation from '../PartComponents/ProductPath/Navigation'
import ImageContainer from '../PartComponents/ProductPath/ImageContainer'
import ProductMain from '../PartComponents/ProductPath/ProductMain'

import { fetchProducts } from '../Partials/fetches'
import { getQueryString } from '../Partials/queryPartials'

class PathProduct extends Component {
    render() {
        var { title, category, images } = this.state.product
        return (
            <div className='PathProduct mar-a-h-80'>
                <Navigation productCategory={category}/>
                <h1 className="s-20 w-bold c-medium">{title}</h1>
                <div className="d-flex mar-t-20 a-bet">
                    <ImageContainer images={images}/>
                    <ProductMain product={this.state.product}/>
                </div>
            </div>
        );
    }

    state = {
        product: {}
    }

    componentDidMount = () => {
        var url = 'http://127.0.0.1:5000/products?id=' + getQueryString().ref
        fetchProducts(url).then(product => this.setState({product}))
    }


}

export default PathProduct;