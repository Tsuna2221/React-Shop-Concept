import React, { Component } from 'react';

class CustomersTable extends Component {
    render() {
        return (
            <div className='mar-t-30'>
                {this.drawTable()}
            </div>
        );
    }

    drawTable = () => {
        if(this.props.fetchedCustomers){
            var customersTable = this.props.fetchedCustomers.map(item => {
                var { name, id, email } = item

                return (
                    <tbody key={id}>
                        <tr className="s-13 c-light2 table-border">
                            <td className="d-flex a-ver" height="50px">{id}</td>
                            <td width="15%" className="v-align">{name}</td>
                            <td className="v-align">{email}</td>
                            <td className="v-align">{0}</td>
                            <td className="v-align">{0}</td>
                            <td className="v-align f-right w-semibold"><div style={{color: this.props.color}}>Link</div></td>
                            <td className="v-align f-right w-semibold"><div style={{color: this.props.color}}>Link</div></td>
                        </tr>
                    </tbody>
                )
            })
    
            return (
                <table className='sbw-fit'>
                    <thead>
                        <tr className="s-13 c-light2">
                            <th className="pad-v-10 f-left">ID</th>
                            <th className="pad-v-10 f-left">Name</th>
                            <th className="pad-v-10 f-left">Email</th>
                            <th className="pad-v-10 f-left">Nº of Comments</th>
                            <th className="pad-v-10 f-left">Nº of Orders</th>
                            <th className="pad-v-10 f-right">Comments Page</th>
                            <th className="pad-v-10 f-right">Orders Page</th>
                        </tr>
                    </thead>
                    {customersTable}
                </table>
            )
        }
    }
}

export default CustomersTable;