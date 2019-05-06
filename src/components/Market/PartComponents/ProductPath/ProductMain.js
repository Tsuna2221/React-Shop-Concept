import React, { Component } from 'react';

import starsFill from '../../../../assets/star.svg'
import stars from '../../../../assets/star-outline.svg'

class ProductMain extends Component {
    render() {
        var { company, about, price, category, pid } = this.props.product
        if(this.props.product){
            var manufactURL = category ? '/c/' + category.category_name.replace(/\s/g, '-') + "?manufacturer=" + company.replace(/\s/g, '-') : ''
            var desc = about ? about.description.length > 150 ? <span className="w-regular">{about.description.substr(0, 150)}... <a className="c-blue" href="#description">Read More</a></span> : <span>{about.description}</span> : ""
            var rating = about ? parseInt(about.rating) : 0
            var ratingArray = []
            var priceString = price ? 
                new Intl.NumberFormat('en-US', {
                    style: 'currency', 
                    currency: 'USD',
                    minimumFractionDigits: 2 
                }).format(parseInt(price.toFixed().substr(0, price.toFixed().length - 2)))
            : ""

            if(pid){
                for(var i = 0; i < 5; i++){
                    ratingArray.push(<img key={pid + i} src={stars} className={"star-rating mini "+ pid + (i + 1)} alt=""/>)
                }
    
                for(var x = 0; x < parseInt(rating); x++){
                    ratingArray[x] = <img key={pid + x} src={starsFill} className={"star-rating mini "+ pid + (x + 1)} alt=""/>
                }    
            }

            return (
                <div className='product-main-container'>
                    <div className="content pad-30 bs-dashboard">
                        <p className="s-14 w-medium c-black">Manufacturer: <a className="c-blue w-regular" href={manufactURL}>{company}</a></p>
                        <p className="s-14 w-medium c-black lh-long mar-t-16">Description: {desc}</p>
                        <div className="d-flex a-ver mar-t-16">
                            {ratingArray} 
                            <span className="mar-h-10 c-medium">|</span>
                            <p className="s-14 w-regular c-blue">Read Reviews (18)</p>
                        </div>
                        <p className="s-14 w-medium c-black mar-t-16">Price: <span className="s-26 w-bold c-blue">{priceString}</span></p>
                    </div>
                    <div className="sbw-fit pad-18 t-button">
                        <span className="s-17">Add to Cart</span>
                    </div>
                </div>
            );
        }
    }

    state = {

    }
}

export default ProductMain;