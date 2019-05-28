import React from 'react';
import { parsePrice } from '../../../MainPartials/parse'

import starsFill from '../../../../assets/star.svg'
import stars from '../../../../assets/star-outline.svg'

const CatalogBody = ({drawPages, products}) => {
    const drawProducts = () => {
        return products.map(product => {
            let { title, company, price, images, pid, category, about: { rating } } = product
            let sub_name = category.sub_category.name
            let anchorhref = "/p/" + title.replace(/[-:'()–/\\]/g, '').replace(/\s/g, '-').toLowerCase() + '?ref=' + pid

            let priceElement = () => {
                let priceArray = parsePrice(price).split(".")
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

    return (
        <div className='CatalogBody mar-h-50 sbw-fit'>
            <ul className='unordered-products'>
                {drawProducts()}
            </ul>
            <div className="d-flex a-hor">
                {drawPages()}
            </div>
        </div>
    );
}

export default CatalogBody;