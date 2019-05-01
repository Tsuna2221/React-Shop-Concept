import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className='cat-sidebar  pad-t-20'>
                {this.drawCategory()}
                {this.drawManufacturer()}
            </div>
        );
    }

    state = {
        manufactList: {
            active: false,
            limit: 6
        },
        typesList: {
            active: false,
            limit: 6
        }
    }

    drawCategory = () => {
        var { category_name, sub_categories } = this.props.category 
        var subParam = this.props.match.params.subcategory
        var listState = this.state.typesList
        var typos = []

        if(sub_categories){
            var subs = sub_categories.map((sub, index) => (
                <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4">
                    <a href={`/c/${category_name.replace(/\s/g, '-') + "/" + sub.name.replace(/\s/g, '-')}`} className="s-13 w-medium c-light3 clickable t-colorize-text">{sub.name}</a>
                </li>
            ))

            if(subParam){
                this.props.products.products.map(product => {
                    if(!typos.includes(product.category.sub_category.type)){
                        typos.push(product.category.sub_category.type)
                    }
                })
            }else{
                sub_categories.forEach(sub => {
                    sub.types.forEach(type => {
                        if(!typos.includes(type.type_label)){
                            typos.push(type.type_label)
                        }
                    })
                })
            }
        }

        var types = typos.map((type, index) => index < listState.limit ? <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4">
                                                                             <a href={`?type=${type.replace(/\s/g, '-')}`} className="s-13 w-medium c-light3 clickable t-colorize-text">{type}</a>
                                                                         </li> : null)

        if(subParam){
            return (
                <div className="s-listing">
                    <label className="s-14 w-medium c-blue">Types</label>
                    <ul className="mar-l-20">
                        {types}
                    </ul>
                </div>
            )
        }else{
            return (
                <div className="s-listing">
                    <label className="s-14 w-medium c-blue">{category_name}</label>
                    <ul className="mar-l-20">
                        {subs}
                    </ul>
                </div>
            )
        }
    }

    drawManufacturer = () => {
        var { sub_categories, category_name } = this.props.category 
        var listState = this.state.manufactList
        var subParam = this.props.match.params.subcategory
        var manufacturers = []
        var buttonLabel = listState.active ? "Show Less" : 'Show More'
        var showButton = () => {
            if(manufacturers.length > 0){
                return manufacturers.length < 6 ? null : (<span onClick={lengthActivation} className="s-13 w-medium c-blue clickable">{buttonLabel}</span>)
            }
        }
        var lengthActivation = () => listState.active ? this.setState({manufactList:{limit: 6, active: false}}) : this.setState({manufactList:{limit: manufacturers.length, active: true}})

        if(sub_categories){
            if(!subParam){
                sub_categories.forEach(sub => {
                    sub.types.forEach(type => {
                        type.products.forEach(product => {
                            if(!manufacturers.includes(product.company)){
                                manufacturers.push(product.company)
                            }
                        })
                    })
                })
            }else if(this.props.products.products){
                this.props.products.products.forEach(product => {
                    if(!manufacturers.includes(product.company)){
                        manufacturers.push(product.company)
                    }
                })
            }
        }

        var manufact = manufacturers.map((manu, index) => {
            if(index < listState.limit){
                return (
                    <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4"><a href={`?manufacturer=${manu.replace(/\s/g, '-')}`} className="s-13 w-medium c-light3 clickable t-colorize-text">{manu}</a></li>
                )
            }
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

    drawRating = () => {

    }

    drawPrice = () => {

    }
}

export default Sidebar;