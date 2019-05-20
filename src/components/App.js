import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Market/PartComponents/Header'
import LoaderOverlay from './Market/PartComponents/LoaderOverlay'

import Home from './Market/Home'
import PathCategory from './Market/Sections/Category'
import PathProduct from './Market/Sections/Product'

class App extends Component {
render() {
	return (
		<div className="App">
			<LoaderOverlay isLoading={this.state.isLoading}/>
			<Header categories={this.state.categories}/>
			<Router>
				<Route exact path="/" render={() => <Home categories={this.state.trend.categories} products={this.state.trend.products} banners={this.state.banners}/>}/>
				<Route exact path='/c/:category' render={(props) => <PathCategory {...props}/>}/>
				<Route exact path='/c/:category/:subcategory' render={(props) => <PathCategory {...props}/>}/>
				<Route exact path='/p/:productName' render={() => <PathProduct/>}/>
			</Router>
		</div>
		);
	}

	state = {
		categories: [],
		banners: [],
		trend: {
			categories: [],
			products: []
		},
		isLoading: true
	}

	componentDidMount = () => {
		let mainURL = 'http://127.0.0.1:5000/'

		fetch(mainURL).then(res => res.json()).then(res => this.setState({
			isLoading: false, 
			categories: res.data.featured_categories,
			banners: res.data.banners,
			trend: {
				categories: res.data.trend.category,
				products: res.data.trend.product
			}
		}))
	}
}

export default App;