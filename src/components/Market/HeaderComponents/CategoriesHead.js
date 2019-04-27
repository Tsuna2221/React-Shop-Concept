import React, { Component } from 'react';

class CategoriesHead extends Component {
    render() {
        return (
            <div className='CategoriesHead bg-white sd-low d-flex a-cen'>
                <div className="CategoriesHead__section-list">
                    <a href="/" className="c-medium s-13 mar-h-14">All Categories</a>
                    {this.drawCategories()}
                </div>
            </div>
        );
    }

    state = {

    }

    drawCategories = () => this.props.categories ? this.props.categories.data.map(cat => <a key={cat.category_name} href={'/c/' + cat.category_name.replace(/([\s])/g, '-')} className="c-medium s-13 mar-h-14">{cat.category_name}</a>) : null
}

export default CategoriesHead;