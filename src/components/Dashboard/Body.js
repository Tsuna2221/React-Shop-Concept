import React, { Component, Fragment } from 'react';
import {SearchBarProducts, SearchBarCategories} from './SearchBars/SearchBars'
import ProductsTable from './Tables/ProductsTable'
import CategoriesTable from './Tables/CategoriesTable'
import ProductForm from './Forms/InsertProductForm'
import CategoryForm from './Forms/InsertCategoryForm'
import Counter from './MiscComponents/Counter'

class Body extends Component {
    render() {
        var { name, color } = this.props.currentSection
        var path = window.location.pathname

        return (
            <div className='body bg-white'>
                <div className="body-head d-flex a-ver" style={{borderLeftColor: color}}>
                    <p className="w-semibold s-20 mar-l-16" style={{color}}>{path === "/admin/products/insert" ? "Insert Product" : name}</p>
                </div>
                <div className="panel-container">
                    <div className="panel">
                        {this.drawPanel()}
                    </div>
                </div>
            </div>
        );
    }

    state = {
        fetchedProducts: [],
        fetchedCategories: [],
        categoriesName: [],
    }

    componentDidMount = () => {
        var productsUrl = "http://127.0.0.1:5000/products"
        var categoriesUrl = "http://127.0.0.1:5000/categories"

        fetch(productsUrl)
            .then(res => res.json())
            .then(res => {this.setState({fetchedProducts: res.data.products})})
            .then(fetch(categoriesUrl).then(res => res.json())
            .then(res => {
                let data = res.data
                let categories = []

                for(let i in data) categories.push(data[i].category_name)

                this.setState(
                    {
                        ...this.state, 
                        categoriesName: categories,
                        fetchedCategories: res
                    })                
            }))
    }

    drawPanel = () => {
        var { name, color } = this.props.currentSection

        switch(window.location.pathname){
            case "/admin/products":
                return(
                    <Fragment>
                        <SearchBarProducts color={color}/>
                        <a href="products/insert" className="tx-button" style={{backgroundColor: color}}>Insert Products</a>
                        <ProductsTable fetchedProducts={this.state.fetchedProducts} color={color} type={name}/>
                    </Fragment>
                )

            case "/admin/products/insert":
                return(
                    <Fragment>
                        <ProductForm categories={this.state.categoriesName} color={color}/>
                    </Fragment>
                )

            case "/admin/categories":
                let {total_products, total_categories} = this.state.fetchedCategories
                let countData = [
                    {
                        label: "Registered Products",
                        count: total_products
                    },
                    {
                        label: "Registered Categories",
                        count: total_categories
                    }
                ]

                return(
                    <Fragment>
                        <div className="d-flex a-bet">
                            <div>
                                <SearchBarCategories color={color}/>
                                <a href="categories/insert" className="tx-button" style={{backgroundColor: color}}>Insert Category</a>
                            </div>
                            <div className="mar-t-20">
                                <Counter color={color} data={countData}/>
                            </div>
                        </div>
                        <CategoriesTable fetchedCategories={this.state.fetchedCategories} color={color} type={name}/>
                    </Fragment>
                )

            case "/admin/categories/insert":
                return(
                    <Fragment>
                        <CategoryForm color={color}/>
                    </Fragment>
                )

            default:
                return null;
        }
    }
}

export default Body;