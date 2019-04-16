import React, { Component } from 'react';

class ProductsTable extends Component {
    render() {
        return (
            <div className='mar-t-20'>
                {this.drawTable()}
            </div>
        );
    }

    drawTable = () => {
        var productTable = this.props.fetchedProducts.map(item => {
            var { title, company, created_at, price, price_percentage, images} = item
            var parsedDiscount = (price, discount) => { return (Math.abs((discount*price/100) - price) / 100).toFixed(2)}

            return (
                <tbody key={title}>
                    <tr className="s-13 c-light2 table-border">
                        <td className="d-flex a-cen" height="70px">
                            <img className="imgs-table mar-r-14" src={images[0]} alt=""/>
                        </td>
                        <td width="60%" className="v-align">{title}</td>
                        <td width="13%" className="v-align">{company}</td>
                        <td width="10%" className="v-align">{created_at.substr(5,11)}</td>
                        <td width="11%" className="v-align">${parsedDiscount(price, price_percentage)} at {price_percentage}%</td>
                        <td width="10%" className="v-align f-right w-semibold" style={{color: this.props.color}}>Link</td>
                    </tr>
                </tbody>
            )
        })

        return (
            <table>
                <thead>
                    <tr className="s-13 c-light2">
                        <th className="pad-v-10 f-left"></th>
                        <th className="pad-v-10 f-left">Product</th>
                        <th className="pad-v-10 f-left">Manufacturer</th>
                        <th className="pad-v-10 f-left">Date Added</th>
                        <th className="pad-v-10 f-left">Current Price</th>
                        <th className="pad-v-10 f-right">Product Page</th>
                    </tr>
                </thead>
                {productTable}                       
            </table>
            )
    }
}

export default ProductsTable;