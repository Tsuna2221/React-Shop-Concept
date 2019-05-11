import React, { Component } from 'react';

import RegisterForm from './LogPage/RegisterForm'
import LoginForm from './LogPage/LoginForm'

class LogPage extends Component {
    render() {
        return (
            <div className='screen-container sbw-fit fit-height bg-blue'>
                <div className="form-container fit-height bg-white d-flex a-cen">
                    {this.state.screenState ? <RegisterForm changeScreen={this.handleScreenChange}/> : <LoginForm changeScreen={this.handleScreenChange}/>}
                </div>
            </div>
        );
    }

    state = {
        screenState: true
    }

    handleScreenChange = () => this.setState({...this.state, screenState: !this.state.screenState})
}

export default LogPage;