import React, { Component } from 'react';

import Sidebar from '../PartComponents/CategoryPath/Sidebar'
import CatalogBody from '../PartComponents/CategoryPath/CatalogBody'
import { getQueryString } from '../Partials/queryPartials'
import { fetchCatAndProducts } from '../Partials/fetches'


class PathCategory extends Component {
    render() {
        return (
            <div className='PathCategory d-flex'>
                <Sidebar category={this.state.linkCategory} products={this.state.linkProducts} match={this.props.match}/>
                <CatalogBody match={this.props.match} products={this.state.linkProducts} drawPages={this.drawPages}/>
            </div>
        );
    }

    state = {
        linkProducts: {data: {}}
    }

    componentDidMount = () => {
        let { match } = this.props
        let page = (parseInt(getQueryString().page || 1) * 20) - 20 || 0
        let companyString = getQueryString().manufacturer ? `&company=${getQueryString().manufacturer.replace(/-/g, " ")}` : "" 
        let subString = match.params.subcategory ? `&sub=${match.params.subcategory.replace(/-/g, " ")}` : "" 
        let categoriesURL = `https://flask-market.herokuapp.com/categories?category=${match.params.category.replace(/([-])/g, ' ')}`
        let productPre = `https://flask-market.herokuapp.com/products?offset=${page}${subString}&category=${match.params.category.replace(/([-])/g, ' ')}${companyString}`
        
        if(!this.props.match.params.subcategory){
            fetchCatAndProducts(categoriesURL, productPre).then((data) => {this.setState({linkCategory: data.categories, linkProducts: data.products})})
        }else{
            let productSubsURL = `${productPre}&sub=${this.props.match.params.subcategory.replace(/-/g, " ")}`

            if(getQueryString().type){
                fetchCatAndProducts(categoriesURL, productSubsURL + `&type=${getQueryString().type}`).then((data) => {this.setState({linkCategory: data.categories, linkProducts: data.products})})
            }else{
                fetchCatAndProducts(categoriesURL, productSubsURL).then((data) => {this.setState({linkCategory: data.categories, linkProducts: data.products})})
            }
        }
    }

    drawPages = () => {
        var { href, origin, pathname } = window.location
        var pageString = href.includes('?') ? href.includes('?page') ? '?page=' : '&page=' : '?page='
        var url = href.includes('?page') ? origin + pathname : href.replace(/[&page=]+[0-9]/, "")
        var { total_pages } = this.state.linkProducts
        var pageList = []

        for(var i = 0; i < total_pages; i++){
            if(parseInt(getQueryString().page) === (i + 1)){
                pageList.push(<span key={i} className="s-18 c-black w-medium mar-h-6">{i + 1}</span>)
            }else{
                pageList.push(<a key={i} className="s-18 c-blue mar-h-6" href={url + pageString + (i + 1)}>{i + 1}</a>)
            }
        }

        return pageList
    }
}

export default PathCategory;