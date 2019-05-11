import React, { Component } from 'react';

import starsFill from '../../../../assets/star.svg'
import stars from '../../../../assets/star-outline.svg'

class CatalogBody extends Component {
    render() {
        return (
            <div className='CatalogBody mar-h-50 sbw-fit'>
                <ul className='unordered-products'>
                    {this.drawProducts()}
                </ul>
                <div className="d-flex a-hor">
                    {this.props.drawPages()}
                </div>
            </div>
        );
    }

    state = {

    }

    drawProducts = () => {
        if(this.props.products.products){
            return this.props.products.products.map(product => {
                let { title, company, price, images, pid, category, about } = product
                let { rating } = about
                let sub_name = category.sub_category.name
                let anchorhref = "/p/" + title.replace(/[-:'()–/\\]/g, '').replace(/\s/g, '-').toLowerCase() + '?ref=' + pid

                let priceElement = () => {
                    let parsedPrice = new Intl.NumberFormat('en-US', {
                        style: 'currency', 
                        currency: 'USD',
                        minimumFractionDigits: 2 
                    }).format(parseInt(price.toFixed().substr(0, price.toFixed().length - 2)))

                    let priceArray = parsedPrice.split(".")
                    return (
                        <span className="s-24 w-regular c-blue t-b-darken-text clickable">{priceArray[0]}<span className="s-14 pos-relative price-top">{priceArray[1]}</span></span>
                    )
                }

                let ratings = []

                for(var i = 0; i < 5; i++){
                    ratings.push(<img key={pid + i} src={stars} className={"star-rating mini "+ pid + (i + 1)} alt=""/>)
                }

                for(var x = 0; x < parseInt(rating); x++){
                    ratings[x] = <img key={pid + x} src={starsFill} className={"star-rating mini "+ pid + (x + 1)} alt=""/>
                }
    
                return(
                    <li key={pid} className="table-border pad-v-10">
                        <div className="p-container d-flex a-ver">
                            <a href={anchorhref} className="p-preview">
                                <img className="d-flex mar-h-cen pad-h-30" src={images[0]} alt=""/>
                            </a>
                            <div>
                                <div className="mar-b-6">
                                    <a href={anchorhref} className="s-18 w-medium c-blue t-underline-text t-b-darken-text">{title}</a>
                                </div>
                                <span className="s-14 w-regular c-light2">by {company} - <a href={"/c/" + category.category_name.replace(/\s/g, '-') + "/" + sub_name.replace(/\s/g, '-')} className="s-14 w-regular c-blue t-underline-text t-b-darken-text">{sub_name}</a></span>
                                <div className="mar-v-4">
                                    {ratings}
                                </div>
                                {priceElement()}
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }
}

export default CatalogBody;