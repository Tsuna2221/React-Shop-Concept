import React, { Component } from 'react';
import { isLogged, getUser } from '../../MainPartials/auth'

class UserHead extends Component {
    render() {
        return (
            <div className='UserHead sd-medium bg-white d-flex a-ver'>
                <div className="UserHead__side-left d-flex a-ver mar-l-20">
                    <div className="cell-lang d-flex a-ver">
                        <span className="mdi mdi-earth s-18 c-medium"></span>
                        <p className="c-medium s-13 mar-l-8">English</p>
                    </div>
                    <div className="cell-gh d-flex a-ver mar-l-30">
                        <a href="/" className="c-blue s-13">Contact</a>
                        <div className="ln-light-ver mar-h-12"></div>
                        <a href="/" className="c-blue s-13">Sell</a>
                    </div>
                </div>

                <div className="UserHead__side-right d-flex a-ver mar-r-20">
                    <div className="cell-profile mar-r-30">
                        {isLogged()
                        ?
                        <p className="c-medium s-13">Hello, <a href="/" className="c-blue">{this.state.data.name}</a></p>
                        :
                        <p className="c-medium s-13">Hello, <a href="/log" className="c-blue">Sign In</a> or <a href="/log" className="c-blue">Register</a></p>
                        }
                    </div>
                    <div className="cell-notification d-flex a-ver">
                        <div className="alert-notification d-flex">
                            <span className="mdi mdi-bell s-18 c-medium"></span>
                            <div className="br-circle bs-light c-medium bg-white alert-circle d-flex a-cen s-12">0</div>
                        </div>
                        <div className="alert-cart d-flex a-ver">
                            <span className="mdi mdi-cart s-18 c-medium alert-circle"></span>
                            <div className="br-circle bs-light c-blue bg-white alert-circle d-flex a-cen s-12">2</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    state = {
        data: {}
    }

    componentDidMount = () => {if (isLogged()) { getUser().then(data => this.setState({data: data.data})) }}
}

export default UserHead;