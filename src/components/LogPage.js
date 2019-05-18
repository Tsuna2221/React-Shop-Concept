import React, { Component, Fragment } from 'react';

import LoaderOverlay from './Market/PartComponents/LoaderOverlay'
import RegisterForm from './LogPage/RegisterForm'
import LoginForm from './LogPage/LoginForm'

class LogPage extends Component {
    render() {
        return (
            <Fragment>
                <LoaderOverlay isLoading={this.state.isLoading}/>
                <div className='screen-container sbw-fit fit-height bg-blue'>
                    <div className="form-container fit-height bg-white d-flex a-cen">
                        {this.state.screenState ? <RegisterForm changeScreen={this.handleScreenChange} setLoader={this.setLoader}/> : <LoginForm changeScreen={this.handleScreenChange} setLoader={this.setLoader}/>}
                    </div>
                </div>
            </Fragment>
            
        );
    }

    state = {
        screenState: true,
        isLoading: false
    }

    handleScreenChange = () => this.setState({...this.state, screenState: !this.state.screenState})

    setLoader = (bool) => this.setState({isLoading: bool})
}

export default LogPage;