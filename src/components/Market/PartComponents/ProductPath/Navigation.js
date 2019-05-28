import React from 'react';

const Navigation = ({productCategory}) => {
    if(productCategory){
        var { category_name, sub_category } = productCategory
        var catURL = '/c/' + category_name.replace(/\s/g, '-')
        var subURL = '/c/' + category_name.replace(/\s/g, '-') + "/" + sub_category.name.replace(/\s/g, '-')
        var typeURL = '/c/' + category_name.replace(/\s/g, '-') + "/" + sub_category.name.replace(/\s/g, '-') + "?type=" + sub_category.type.replace(/\s/g, '-')
        
        return (
            <div className='d-flex a-ver pad-v-12'>
                <a href={catURL} className="t-colorize-text c-blue s-14 w-medium">{category_name}</a>
                <span className="mdi mdi-chevron-right s-20 c-medium mar-h-4"></span>
                <a href={subURL} className="t-colorize-text c-blue s-14 w-medium">{sub_category.name}</a>
                <span className="mdi mdi-chevron-right s-20 c-medium mar-h-4"></span>
                <a href={typeURL} className="t-colorize-text c-blue s-14 w-medium">{sub_category.type}</a>
            </div>
        );
    }
    return <div></div>;
}

export default Navigation;