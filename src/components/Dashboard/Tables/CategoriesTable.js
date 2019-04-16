import React, { Component } from 'react';

class CategoriesTable extends Component {
    render() {
        return (
            <div className='mar-t-20'>
                {this.drawTable()}
            </div>
        );
    }

    drawTable = () => {
        if(this.props.fetchedCategories.data){
            var categoriesTable = this.props.fetchedCategories.data.map(item => {
                var { category_name, num_of_products, sub_categories, cid } = item
    
                return (
                    <tbody key={cid}>
                        <tr className="s-13 c-light2 table-border">
                            <td width="100%" className="d-flex a-ver" height="50px">{category_name}</td>
                            <td width="16%" className="v-align">{sub_categories.length}</td>
                            <td width="13%" className="v-align">{num_of_products}</td>
                            <td width="11%" className="v-align">14 Apr 2019</td>
                            <td width="10%" className="v-align f-right w-semibold" style={{color: this.props.color}}>Link</td>
                        </tr>
                    </tbody>
                )
            })
    
            return (
                <table className='sbw-fit'>
                    <thead>
                        <tr className="s-13 c-light2">
                            <th className="pad-v-10 f-left">Category</th>
                            <th className="pad-v-10 f-left">Nº of Sub-Categories</th>
                            <th className="pad-v-10 f-left">Nº of Products</th>
                            <th className="pad-v-10 f-left">Date Added</th>
                            <th className="pad-v-10 f-right">Category Page</th>
                        </tr>
                    </thead>
                    {categoriesTable}                       
                </table>
            )
        }
    }
}

export default CategoriesTable;