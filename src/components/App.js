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
			<Header categories={this.state.category}/>
			<Router>
				<Route exact path="/" component={Home}/>
				<Route exact path='/c/:category' component={PathCategory}/>
				<Route exact path='/c/:category/:subcategory' component={PathCategory}/>
				<Route exact path='/p/:productName' component={PathProduct}/>
			</Router>
		</div>
		);
	}

	state = {
		category: {data: []},
		isLoading: true
	}

	componentDidMount = () => {
		let categoriesURL = 'http://127.0.0.1:5000/categories'

		fetch(categoriesURL).then(res => res.json()).then(res => this.setState({isLoading: false, category: res}))
	}
}

export default App;