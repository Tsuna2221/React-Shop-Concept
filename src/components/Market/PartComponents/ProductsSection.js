import React, { Component } from 'react';

import starsFill from '../../../assets/star.svg'
import stars from '../../../assets/star-outline.svg'
import { parsePrice } from '../../MainPartials/parse';

class ProductsSection extends Component {
    render() {
        if(this.props.type === 'trending'){
            return (
                <div className='products-section'>
                    <div className="mar-v-30">
                        <h1 className="s-24 w-medium c-medium">Trending Products</h1>
                    </div>
                    <div className="products-section__products-container d-flex">
                        {this.drawProducts()}
                    </div>
                </div>
            );
        }
    }

    componentDidMount = () => {
        return this.props.products.map(product => {
            for(var i = 0; i < product.rating; i++){
                document.querySelector('.' + product.id + (i + 1)).setAttribute('src', starsFill)
            }

            return null;
        })
    }

    drawProducts = () => {
        if(this.props.products){
            return this.props.products.map(product => {
                var {title, price, id, image } = product
                var ratings = []
    
                for(var i = 0; i < 5; i++){
                    ratings.push(<img key={i + 1} src={stars} className={"star-rating "+ id + (i + 1)} alt=""/>)
                }
    
                return (
                    <div key={id} className="product-cell pad-14 sd-medium br-low bg-white">
                        <div className="product-img">
                            <img src={image} className="d-flex mar-h-cen" alt=""/>
                        </div>
                        <p className="product-title mar-v-8 s-14 c-medium">{title.substr(0,40)}...</p>
                        <div className="product-price-rating d-flex a-bet">
                            <div className="product-pricing mar-t-14">
                                <h2 className="c-medium s-12">{parsePrice(price)}</h2>
                                <h1 className="c-blue s-18 w-medium mar-t-8">{parsePrice(price)}</h1>
                            </div>
                            <div className="product-rating">
                                {ratings}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
}
export default ProductsSection;