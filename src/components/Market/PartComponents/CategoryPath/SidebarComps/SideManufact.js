import React, { Component, Fragment } from 'react';
import { getAnchor } from "../../../Partials/queryPartials"

class SideManufact extends Component {
    render() {
        return (
            <Fragment>
                {this.drawManufacturer()}
            </Fragment>
        );
    }

    state = {
        manufactList: {
            active: false,
            limit: 6
        }
    }

    drawManufacturer = () => {
        if(this.props.category){
            var { category_name } = this.props.category
            var manufacturers = []
            var listState = this.state.manufactList
            var buttonLabel = listState.active ? "Show Less" : 'Show More'
            var showButton = () => {
                if(manufacturers.length > 0){
                    return manufacturers.length < 6 ? null : (<span onClick={lengthActivation} className="s-13 w-medium c-blue clickable">{buttonLabel}</span>)
                }
            }

            var lengthActivation = () => listState.active ? this.setState({manufactList:{limit: 6, active: false}}) : this.setState({manufactList:{limit: manufacturers.length, active: true}})

            this.props.companies.forEach(manufacturer => {
                if(!manufacturers.includes(manufacturer)){
                    manufacturers.push(manufacturer)
                }
            })
    
            var manufact = manufacturers.map((manu, index) => {
                if(index < listState.limit){
                    return (
                        <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4">
                            <a href={getAnchor("manufacturer", manu)} className="s-13 w-medium c-light3 clickable t-colorize-text">{manu}</a>
                        </li>
                    )
                }
                return;
            })
    
            return (
                <div className="s-listing">
                    <label className="s-14 w-medium c-blue">Manufacturer</label>
                    <ul className="mar-l-20">
                        {manufact}
                        {showButton()}
                    </ul>
                </div>
            )
        }
    }
}

export default SideManufact;