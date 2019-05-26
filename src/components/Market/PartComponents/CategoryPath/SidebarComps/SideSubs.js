import React, { Fragment } from 'react';

import { getAnchor } from "../../../../MainPartials/queryPartials"

var SideSubs = (props) => {
    var drawCategory = () => {
        var typesList = {
            active: false,
            limit: 6
        }

        if(props.category){
            var { category_name, sub_categories } = props.category[0]
            var subParam = props.param
            var typos = []
    
            var subs = sub_categories.map((sub, index) => (
                <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4">
                    <a href={`/c/${category_name.replace(/\s/g, '-') + "/" + sub.name.replace(/\s/g, '-')}`} className="s-13 w-medium c-light3 clickable t-colorize-text">{sub.name}</a>
                </li>
            ))

            props.typeList.forEach(typo => {
                if(!typos.includes(typo)){
                    typos.push(typo)
                }
            })
            
            var types = typos.map((type, index) => index < typesList.limit ? 
                <li key={category_name.replace(/\s/g, '-') + index} className="mar-v-4">
                    <a href={getAnchor("type", type)} className="s-13 w-medium c-light3 clickable t-colorize-text">{type}</a>
                </li> : null
            )

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
    }

    return (
        <Fragment>
            {drawCategory()}
        </Fragment>
    );
}

export default SideSubs;