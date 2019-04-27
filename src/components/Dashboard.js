import React, { Component } from 'react';

import Header from './Dashboard/Header'
import Sidebar from './Dashboard/Sidebar'
import Body from './Dashboard/Body'

class App extends Component {
render() {
	return (
		<div className="dashboard-app">
			<Header/>
			<div className="d-main-body d-flex body-height">
				<Sidebar sections={this.state.sections} currentSection={this.state.currentSection}/>
				<Body sections={this.state.sections} currentSection={this.state.currentSection}/>
			</div>
		</div>
		);
	}

	state = {
		sections: [
			{
				label: "Market",
				items: [
					{
						color: '#6D9EE8',
						name: 'Products',
						icon: 'cart-outline'
					},
					{
						color: '#ECAD00',
						name: 'Categories',
						icon: 'format-list-bulleted-square'
					}
				]
			},
			{
				label: "User",
				items: [
					{
						color: '#6E42FE',
						name: 'Customers',
						icon: 'account'
					},
					{
						color: '#6DE8BE',
						name: 'Messages',
						icon: 'email-outline'
					}
				]
			},
			{
				label: "Analytics",
				items: [
					{
						color: '#E86D6D',
						name: 'Transactions',
						icon: 'swap-horizontal'
					},
					{
						color: '#DC6DE8',
						name: 'Analytics',
						icon: 'trending-up'
					}
				]
			},
			{
				label: "Settings",
				items: [
					{
						color: '#E8AF6D',
						name: 'Layout',
						icon: 'view-dashboard'
					},
					{
						color: '#E86DAB',
						name: 'System',
						icon: 'settings'
					}
				]
			}
		],
		currentSection: {}
	}

	componentDidMount = () => {
		console.log(this.props)
		var sections = []
		var colors = []
		for (let i = 0; i < this.state.sections.length; i++) {
			sections.push(this.state.sections[i].items[0].name, this.state.sections[i].items[1].name)
			colors.push(this.state.sections[i].items[0].color, this.state.sections[i].items[1].color)
		}

		for (let i = 0; i < sections.length; i++) {
			if(window.location.pathname.includes(sections[i].toLowerCase())){
				this.setState({
					...this.state,
					currentSection:{
						name: sections[i],
						color: colors[i]
					}
				})
			}
		}
	}
}

export default App;
