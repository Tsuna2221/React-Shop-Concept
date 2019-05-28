import React from 'react';

import { gql } from "apollo-boost"
import { graphql } from 'react-apollo'

import Sidebar from '../PartComponents/CategoryPath/Sidebar'
import CatalogBody from '../PartComponents/CategoryPath/CatalogBody'
import { getQueryString, checkIfArgs } from '../../MainPartials/queryPartials'
import LoaderOverlay from '../PartComponents/LoaderOverlay'

let categoryArray = window.location.pathname.substr(3).replace(/-/g, " ").split("/")

const categoryQuery = gql`
{
	category(category: "${categoryArray[0]}") {
        category_name
        cid
        sub_categories {
            name
            types
        }
        products${checkIfArgs(categoryArray[1])}{
            list_companies
            list_subs
            list_types
            total_pages
            products{
                title
                price
                pid
                company
                images
                about{
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
	}
}
`

const PathCategory = ({match, data: { loading, error, category }}) => {
	if (loading) return <LoaderOverlay isLoading={loading}/>
    if (error) return <p>Error :(</p>;
        
    let drawPages = () => {
        var { href, origin, pathname } = window.location
        var pageString = href.includes('?') ? href.includes('?page') ? '?page=' : '&page=' : '?page='
        var url = href.includes('?page') ? origin + pathname : href.replace(/[&page=]+[0-9]/, "")
        var { total_pages } = category.products
        var pageList = []

        for(var i = 0; i < total_pages; i++){
            if(parseInt(getQueryString().page) === (i + 1)){
                pageList.push(<span key={i} className="s-18 c-black w-medium mar-h-6">{i + 1}</span>)
            }else{
                pageList.push(<a key={i} className="s-18 c-blue mar-h-6" href={url + pageString + (i + 1)}>{i + 1}</a>)
            }
        }

        return pageList
    }

    return (
        <div className='PathCategory d-flex'>
            <Sidebar category={category} match={match}/>
            <CatalogBody match={match} products={category.products.products} drawPages={drawPages}/>
        </div>
    );
}

export default graphql(categoryQuery)(PathCategory);