import React, { Component } from 'react';
import numeral from 'numeral'

class ProductsSection extends Component {
    render() {
        if(this.props.type === 'trending'){
            return (
                <div className='products-section'>
                    <div className="products-section__label mar-v-20">
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

    }

    drawProducts = () => {
        var products = [
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159
            },
            {
                title: 'ASUS Zenbook Core I7-8550u 512gb SSD 16gb RAM 14" Full HD Mx150 Backlit KB',
                fullPrice: 399,
                price: 159
            },
        ]
    
        return products.map(product => (
            <div className="product-cell pad-14 sd-div br-low">
                <img src="https://picsum.photos/190/170/?image=924" className="product-img"/>
                <p className="product-title mar-v-8 s-14 c-medium">{product.title.substr(0,50)}...</p>
                <div className="product-price-rating">
                    <div className="product-pricing">
                        <h2 className="c-medium s-12">{numeral(product.fullPrice).format('$0,0.00')}</h2>
                        <h1 className="c-blue s-18 w-medium mar-t-6">{numeral(product.price).format('$0,0.00')}</h1>
                    </div>
                    <div className="product-rating"></div>
                </div>
            </div>
        ))
    }
}

export default ProductsSection;