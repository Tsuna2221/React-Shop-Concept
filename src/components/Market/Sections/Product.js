import React, { Component } from 'react';

import Navigation from '../PartComponents/ProductPath/Navigation'
import ImageContainer from '../PartComponents/ProductPath/ImageContainer'
import ProductMain from '../PartComponents/ProductPath/ProductMain'
import ProductDescription from '../PartComponents/ProductPath/ProductDescription'

import { fetchProducts } from '../../MainPartials/fetches'
import { getQueryString } from '../../MainPartials/queryPartials'

class PathProduct extends Component {
    render() {
        var { title, category, images, about } = this.state.product
        var description = about ? about.description : ""
        return (
            <div className='PathProduct mar-a-h-80'>
                <Navigation productCategory={category}/>
                <h1 className="s-20 w-bold c-medium">{title}</h1>
                <div className="d-flex mar-t-20 a-bet">
                    <ImageContainer images={images}/>
                    <ProductMain product={this.state.product}/>
                </div>
                <ProductDescription description={description}/>
            </div>
        );
    }

    state = {
        product: {}
    }

    componentDidMount = () => {
        var url = 'https://flask-market.herokuapp.com/products?id=' + getQueryString().ref
        fetchProducts(url).then(product => this.setState({product}))
    }


}

export default PathProduct;