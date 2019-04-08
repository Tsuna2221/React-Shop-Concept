import React, { Component } from 'react';
import numeral from 'numeral'

import starsFill from '../../../assets/star.svg'
import stars from '../../../assets/star-outline.svg'

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

    state = {
        products: [
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159,
                rating: 5,
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159,
                rating: 4,
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159,
                rating: 3,
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159,
                rating: 2,
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159,
                rating: 4,
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            }
        ]
    }

    componentDidMount = () => {
        return this.state.products.map(product => {
            for(var i = 0; i < product.rating; i++){
                document.querySelector('.' + product.id + (i + 1)).setAttribute('src', starsFill)
            }

            return null;
        })
    }

    drawProducts = () => {
        return this.state.products.map(product => {
            var {title, fullPrice, price, id} = product
            var ratings = []

            for(var i = 0; i < 5; i++){
                ratings.push(<img src={stars} className={"star-rating "+ id + (i + 1)} alt=""/>)
            }

            return (
                <div key={id} className="product-cell pad-14 sd-medium br-low bg-white">
                    <img src="https://picsum.photos/190/170/?image=924" className="product-img" alt=""/>
                    <p className="product-title mar-v-8 s-14 c-medium">{title.substr(0,50)}...</p>
                    <div className="product-price-rating d-flex a-bet">
                        <div className="product-pricing mar-t-14">
                            <h2 className="c-medium s-12">{numeral(fullPrice).format('$0,0.00')}</h2>
                            <h1 className="c-blue s-18 w-medium mar-t-8">{numeral(price).format('$0,0.00')}</h1>
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
export default ProductsSection;