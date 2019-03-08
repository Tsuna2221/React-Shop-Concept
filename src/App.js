import React, { Component } from 'react';

import Header from './components/Header'
import Banner from './components/Banner'

import ProductsSection from './components/Sections/ProductsSection'

class App extends Component {
render() {
	return (
		<div className="App">
			<Header/>
			<Banner/>
			<div className="main-body">
				<ProductsSection type="trending"/>
			</div>
		</div>
		);
	}

	state = {

	}
}

export default App;
