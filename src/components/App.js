import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { gql } from "apollo-boost"
import { graphql } from 'react-apollo'

import Header from './Market/PartComponents/Header'
import LoaderOverlay from './Market/PartComponents/LoaderOverlay'

import Home from './Market/Home'
import PathCategory from './Market/Sections/Category'
import PathProduct from './Market/Sections/Product'

const MainPageQuery = gql`
{
	main{
		banners
		featured_categories{
			href
			name
			id
		}
		trend{
			category{
				href
				id
				image
				label
			}
			product{
				id
				image
				title
				price
				price_percentage
				rating
			}
		}
	}
}
`

const App = (props) => {
	let { loading, error } = props.data

	if (loading) return <LoaderOverlay isLoading={loading}/>
	if (error) return <p>Error :(</p>;

	let { banners, featured_categories, trend: { category, product } } = props.data.main
	return (
		<div className="App">
			<Header categories={featured_categories}/>
			<Router>
				<Route exact path="/" render={() => <Home categories={category} products={product} banners={banners}/>}/>
				<Route exact path='/c/:category' render={(props) => <PathCategory {...props}/>}/>
				<Route exact path='/c/:category/:subcategory' render={(props) => <PathCategory {...props}/>}/>
				<Route exact path='/p/:productName' render={() => <PathProduct/>}/>
			</Router>
		</div>
	);
}

export default graphql(MainPageQuery)(App);