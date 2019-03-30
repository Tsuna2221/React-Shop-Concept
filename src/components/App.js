import React, { Component } from 'react';

import Header from './Market/Header'
import Banner from './Market/Banner'

import ProductsSection from './Market/Sections/ProductsSection'
import CategoriesSection from './Market/Sections/CategoriesSection'


class App extends Component {
render() {
	return (
		<div className="App">
			<Header/>
			<Banner/>
			<div className="main-body">
				<ProductsSection type="trending"/>
                <CategoriesSection/>
			</div>
		</div>
		);
	}

	state = {

	}
}

export default App;