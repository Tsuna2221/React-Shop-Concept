import React, { Component, Fragment } from 'react';
import SearchBarProducts from './SearchBars/Products'
import ProductsTable from './Tables/ProductsTable'
import ProductForm from './Forms/InsertProductForm'

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
        fetchedProducts: []
    }

    componentDidMount = () => {
        var url = "http://127.0.0.1:5000/products"

        fetch(url).then(res => res.json()).then(res => {this.setState({fetchedProducts: res.data})})
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
                        <ProductForm color={color}/>
                    </Fragment>
                )

            default:
                return null;
        }
    }
}

export default Body;