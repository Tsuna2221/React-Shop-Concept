import React, { Fragment } from 'react';

const CategoriesSection = (props) => {
    const drawCategories = () => {
        return props.categories.map(category => {
            var { label, image, id, href } = category
            var labelTitle = []
    
            for(var i = 0; i < 2; i++){
                labelTitle = label.split('and')
            }
    
            var drawLabel = labelTitle.length > 1 
                ? 
                (<Fragment>
                    <p className="s-21 c-medium lh-medium">{labelTitle[0]}and</p>
                    <p className="s-26 c-blue">{labelTitle[1]}</p>
                 </Fragment>) 
                : 
                (<Fragment>
                    <p className="s-26 c-blue">{labelTitle[0]}</p>
                </Fragment>)
    
            return (
                <div key={id} className="categories-cell">
                    <div className="categories-interaction">
                        {drawLabel}
    
                        <a href={href} className="categories-button bs-blue c-blue width-fit clickable mar-t-16">Shop Now</a>
                    </div>
                    <img src={image} className='sd-medium br-low' alt=""/>
                </div>
            )
        })
    }

    return(
        <div className='categories-section'>
            <div className="categories-section__label mar-v-30">
                <h1 className="s-24 w-medium c-medium">Trending Categories</h1>
            </div>
            <div className="d-flex a-bet">
                {drawCategories()}
            </div>
        </div>
    )
}

export default CategoriesSection;