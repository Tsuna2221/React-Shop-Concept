import React from 'react';

import { gql } from "apollo-boost"
import { graphql } from 'react-apollo'

import Navigation from '../PartComponents/ProductPath/Navigation'
import ImageContainer from '../PartComponents/ProductPath/ImageContainer'
import ProductMain from '../PartComponents/ProductPath/ProductMain'
import ProductDescription from '../PartComponents/ProductPath/ProductDescription'
import LoaderOverlay from '../PartComponents/LoaderOverlay'

import { getQueryString } from '../../MainPartials/queryPartials'

const productQuery = gql`
{
    product(id: "${getQueryString().ref}") {
        title
        quantity
        price
        price_percentage
        pid
        company
        images
        about{
            description
            rating
        }
        category{
            category_name
            sub_category{
                name
                type
            }
        }
    }
}
`

const PathProduct = (props) => {
	let { loading, error } = props.data

	if (loading) return <LoaderOverlay isLoading={loading}/>
	if (error) return <p>Error :(</p>;

    let { title, category, images, about } = props.data.product
    let description = about ? about.description : ""

    return (
        <div className='PathProduct mar-a-h-80'>
            <Navigation productCategory={category}/>
            <h1 className="s-20 w-bold c-medium">{title}</h1>
            <div className="d-flex mar-t-20 a-bet">
                <ImageContainer images={images}/>
                <ProductMain product={props.data.product}/>
            </div>
            <ProductDescription description={description}/>
        </div>
    );
}

export default graphql(productQuery)(PathProduct);