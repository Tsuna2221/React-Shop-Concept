import React, { Fragment } from 'react';

const ProductDescription = ({description}) => {
    let paragList = () => {
        let split = description.split('\n')
        let list = []

        for(let parag in split){
            list.push(<Fragment><p className="s-14 w-regular c-medium lh-long">{split[parag]}</p><br/></Fragment>)
        }
        return list
    }

    return (
        <div id='description' className='ProductDescription'>
            <h1 className="s-20 w-medium c-medium mar-v-20">Product Description</h1>
            {paragList()}
        </div>
    );
}

export default ProductDescription;