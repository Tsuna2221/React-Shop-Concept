import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './Market/PartComponents/Header'

import Home from './Market/Home'
import PathCategory from './Market/Sections/Category'

class App extends Component {
render() {
	return (
		<div className="App">
			<Header categories={this.state.category}/>
			<Router>
				<Route exact path="/" component={Home}/>
				<Route path='/c/:category' component={PathCategory}/>
			</Router>
		</div>
		);
	}

	state = {
		product: {data: []},
		category: {data: []}
	}

	componentDidMount = () => {
		let categoriesURL = 'http://127.0.0.1:5000/categories'

		fetch(categoriesURL).then(res => res.json()).then(res => this.setState({...this.state, category: res}))
	}
}

export default App;